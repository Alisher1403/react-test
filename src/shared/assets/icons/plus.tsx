import type { SVGProps } from "react";

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" {...props}>
      <path fill="currentColor" d="M7.25 8.75V14h1.5V8.75H14v-1.5H8.75V2h-1.5v5.25H2v1.5z" />
    </svg>
  );
}
