import type { SVGProps } from "react";

export function BackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="m10.2 5.2-6.8 6.8 6.8 6.8 1.4-1.4-4.4-4.4H21v-2H7.2l4.4-4.4z" />
    </svg>
  );
}
