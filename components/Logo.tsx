import Image from 'next/image';

export default function Logo({ className = 'h-9' }: { className?: string }) {
  return (
    <Image
      src="/brand/klientia-lockup.png"
      alt="Klientia"
      width={520}
      height={213}
      priority
      className={`w-auto ${className}`}
    />
  );
}
