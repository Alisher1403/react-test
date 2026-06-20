import type { SVGProps } from "react";

export function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M14 8.75H2v-1.5h12z" />
    </svg>
  );
}
