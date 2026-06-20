import type { SVGProps } from "react";

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M3 10.3 12 3l9 7.3v9.2a1.5 1.5 0 0 1-1.5 1.5h-5v-6.5h-5V21h-5A1.5 1.5 0 0 1 3 19.5z"
      />
    </svg>
  );
}
