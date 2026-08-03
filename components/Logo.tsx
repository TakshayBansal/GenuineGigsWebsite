import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand-logo ${light ? "is-light" : ""}`} aria-label="GenuineGigs home">
      <Image src="/brand/full.png" alt="GenuineGigs" width={1017} height={140} priority />
    </Link>
  );
}
