#!/usr/bin/env python3
"""
Convert an SEO article written as plain HTML into a guide JSON file the site can render.

Usage (from the project root):
  pip install beautifulsoup4
  python scripts/convert_html.py path/to/page.html --slug my-new-guide --topic Hiring --order 8

Options:
  --kind article|portfolio   article (default) or portfolio (uses <main> instead of <article>)
  --topic TEXT               small label shown on the guide card
  --order N                  position in the /guides list (lower = earlier)
  --pillar                   mark as the featured "start here" guide
  --draft                    hidden in production until you remove "draft" from the JSON
  --out DIR                  output folder (default: src/content/guides)

Expected HTML: <header> with <h1> and intro <p>s, then one <section id="..."> per
topic, each starting with an <h2>. A section with id="faq" holds <h3> questions
followed by <p> answers. Tables, lists, <blockquote> and <article> cards are supported.
"""
import argparse, json, os, re, sys
from bs4 import BeautifulSoup, Comment, NavigableString, Tag


def norm_href(h):
    h = re.sub(r"^https?://example\.com", "", h or "")
    frag = ""
    if "#" in h:
        h, frag = h.split("#", 1)
        frag = "#" + frag
    if len(h) > 1:
        h = h.rstrip("/")
    return (h or "/") + frag


def text(node):
    return re.sub(r"\s+", " ", node.get_text(" ")).strip()


def inline(node):
    out = []
    for c in node.children:
        if isinstance(c, Comment):
            continue  # HTML comments are notes for you, never page content
        if isinstance(c, NavigableString):
            s = re.sub(r"\s+", " ", str(c))
            if s:
                out.append(s)
        elif isinstance(c, Tag):
            if c.name == "a":
                out.append({"a": norm_href(c.get("href")), "t": inline(c)})
            elif c.name in ("strong", "b"):
                out.append({"b": inline(c)})
            elif c.name in ("em", "i"):
                out.append({"i": inline(c)})
            elif c.name == "br":
                out.append(" ")
            else:
                out.extend(inline(c))
    merged = []
    for x in out:
        if isinstance(x, str) and merged and isinstance(merged[-1], str):
            merged[-1] += x
        else:
            merged.append(x)
    if merged and isinstance(merged[0], str):
        merged[0] = merged[0].lstrip()
    if merged and isinstance(merged[-1], str):
        merged[-1] = merged[-1].rstrip()
    return [m for m in merged if m != ""]


def blocks(container):
    res = []
    for el in container.find_all(recursive=False):
        n = el.name
        if n == "p":
            res.append({"type": "p", "inline": inline(el)})
        elif n in ("h3", "h4"):
            res.append({"type": "h3", "text": text(el)})
        elif n in ("ul", "ol"):
            res.append({"type": n, "items": [inline(li) for li in el.find_all("li", recursive=False)]})
        elif n == "table":
            head = [inline(th) for th in el.select("thead th")]
            rows = [[inline(td) for td in tr.find_all("td")] for tr in el.select("tbody tr")]
            res.append({"type": "table", "head": head, "rows": rows})
        elif n == "blockquote":
            res.append({"type": "quote", "inline": inline(el.find("p") or el)})
        elif n == "article":
            inner = BeautifulSoup(str(el), "html.parser").find("article")
            h = inner.find(["h3", "h4"])
            title = text(h) if h else ""
            if h:
                h.decompose()
            res.append({"type": "card", "title": title, "blocks": blocks(inner)})
    return res


def convert(path, slug, kind, topic, order, pillar, draft):
    s = BeautifulSoup(open(path, encoding="utf-8").read(), "html.parser")
    g = {"slug": slug, "kind": kind, "topic": topic, "order": order}
    if pillar:
        g["pillar"] = True
    if draft:
        g["draft"] = True
    g["title"] = text(s.title)
    g["description"] = s.find("meta", attrs={"name": "description"})["content"]
    og_t = s.find("meta", property="og:title")
    og_d = s.find("meta", property="og:description")
    g["ogTitle"] = og_t["content"] if og_t else g["title"]
    g["ogDescription"] = og_d["content"] if og_d else g["description"]
    for sc in s.find_all("script", type="application/ld+json"):
        try:
            d = json.loads(sc.string)
        except Exception:
            continue
        if "datePublished" in d:
            g["published"] = d["datePublished"]
            g["updated"] = d.get("dateModified", d["datePublished"])
            break
    root = s.body.find("article") if kind == "article" else s.body.find("main")
    header = root.find("header", recursive=False)
    g["h1"] = text(header.find("h1"))
    intro = []
    for p in header.find_all("p", recursive=False):
        t = text(p)
        if t.startswith(("Last updated", "Jump to")):
            continue
        node = {"type": "p", "inline": inline(p)}
        if p.find("strong") and t.lower().startswith(("in short", "overall rating")):
            node["type"] = "summary"
        intro.append(node)
    g["intro"] = intro
    sections = []
    for sec in root.find_all("section", recursive=False):
        h2 = sec.find("h2")
        item = {"id": sec.get("id"), "title": text(h2)}
        h2.decompose()
        if sec.get("id") == "faq":
            faqs, q = [], None
            for el in sec.find_all(recursive=False):
                if el.name == "h3":
                    q = text(el)
                elif el.name == "p" and q:
                    faqs.append({"q": q, "a": inline(el)})
                    q = None
            item["faqs"] = faqs
        else:
            item["blocks"] = blocks(sec)
        if sec.get("id") in ("cta", "get-in-touch"):
            item["cta"] = True
        sections.append(item)
    g["sections"] = sections
    return g


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("html")
    ap.add_argument("--slug", required=True)
    ap.add_argument("--kind", default="article", choices=["article", "portfolio"])
    ap.add_argument("--topic", default="Guide")
    ap.add_argument("--order", type=int, default=50)
    ap.add_argument("--pillar", action="store_true")
    ap.add_argument("--draft", action="store_true")
    ap.add_argument("--out", default="src/content/guides")
    a = ap.parse_args()
    g = convert(a.html, a.slug, a.kind, a.topic, a.order, a.pillar, a.draft)
    os.makedirs(a.out, exist_ok=True)
    dest = os.path.join(a.out, f"{a.slug}.json")
    json.dump(g, open(dest, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"Wrote {dest} ({len(g['sections'])} sections)")
