import Link from "next/link";

const variants = {
  primary: "bg-accent text-ink hover:bg-accent-dark",
  secondary: "bg-ink text-white hover:bg-primary-dark",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  onDark: "border-2 border-white/30 text-white hover:border-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = `inline-flex items-center justify-center rounded-md px-6 py-3 font-display text-lg font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}