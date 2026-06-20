import type { SVGProps } from "react";

export function OrdersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" {...props}>
      <path fill="currentColor" d="M17.999 18.536 21 16.804V7.196L12 2 9.481 3.454l8.518 4.892z" />
      <path fill="currentColor" d="M11.82 21.896 3 16.804V7.196L7.478 4.61 16 9.504v9.992z" />
      <path stroke="currentColor" d="M17.999 18.536 21 16.804V7.196L12 2 9.481 3.454l8.518 4.892z" />
      <path stroke="currentColor" d="M11.82 21.896 3 16.804V7.196L7.478 4.61 16 9.504v9.992z" />
    </svg>
  );
}
