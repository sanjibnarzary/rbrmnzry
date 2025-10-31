import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="180"
      height="30"
      viewBox="0 0 180 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Rabiram Narzary Logo"
      {...props}
    >
      <text
        x="0"
        y="22"
        fontFamily="'PT Sans', sans-serif"
        fontSize="20"
        fontWeight="bold"
        fill="hsl(var(--primary))"
        className="fill-primary"
      >
        Sjt. Rabiram Narzary
      </text>
    </svg>
  );
}
