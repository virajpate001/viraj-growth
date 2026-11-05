// Returns true if saved. Never throws, so a storage problem can't break the form.
export async function saveLead(lead) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return false;

  try {
    const res = await fetch(`${url}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      console.error("Supabase save failed:", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("Supabase save error:", err);
    return false;
  }
}