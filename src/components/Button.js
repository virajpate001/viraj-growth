import Link from "next/link";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-line text-ink hover:bg-surface",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

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