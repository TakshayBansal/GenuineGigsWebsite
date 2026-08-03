import Image from "next/image";

export function ProductFrame({ src, alt, label, priority = false, width = 1672, height = 941 }: { src: string; alt: string; label?: string; priority?: boolean; width?: number; height?: number }) {
  return (
    <div className="product-frame">
      <div className="frame-bar"><div className="frame-dots"><i /><i /><i /></div><span>{label || "GenuineGigs workspace"}</span><b>LIVE WORKSPACE</b></div>
      <Image src={src} alt={alt} width={width} height={height} priority={priority} quality={100} unoptimized sizes="(max-width: 900px) 96vw, 1180px" />
    </div>
  );
}
