import Image from "next/image";

export default function ImageFrame({
  src,
  alt,
  label = "Add image here",
  ratio = "aspect-[4/5]",
  priority = false,
  parallax = 8,
  reveal = true,
  bare = false,
  sizes = "(min-width: 1024px) 45vw, 100vw",
  className = "",
}) {
  const moves = parallax > 0;

  return (
    <div
      data-mask={reveal ? "" : undefined}
      className={`group relative overflow-hidden bg-elevated ${
        bare ? "" : "rounded-2xl border border-line"
      } ${ratio} ${className}`}
    >
      <div
        data-parallax={moves ? parallax : undefined}
        className={`absolute ${moves ? "inset-x-0 -inset-y-[12%]" : "inset-0"}`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.22),transparent_55%),linear-gradient(160deg,#1c1e27,#15171f)] transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
      </div>
      {!src && process.env.NODE_ENV !== "production" && (
        <p className="absolute bottom-4 left-4 text-xs text-subtle">{label}</p>
      )}
    </div>
  );
}