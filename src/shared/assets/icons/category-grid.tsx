import type { SVGProps } from "react";

export function CategoryGridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="8" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="8" cy="16" r="2.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}
