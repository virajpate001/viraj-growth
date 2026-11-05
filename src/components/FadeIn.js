export default function FadeIn({ children, className = "" }) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}