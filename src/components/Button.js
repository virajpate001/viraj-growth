import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const variants = {
  primary: "bg-accent text-bg hover:bg-accent-dark",
  outline: "border border-line text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink hover:text-accent",
};
// Names used by earlier versions of the site
variants.secondary = variants.outline;
variants.onDark = variants.outline;

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  ...props
}) {
  const styles = `group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-heading text-sm font-bold transition-colors duration-300 ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {content}
      </Link>
    );
  }
  return (
    <button className={styles} {...props}>
      {content}
    </button>
  );
}