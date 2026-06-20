import type { SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.762 17.176a8.5 8.5 0 1 1 1.414-1.414l3.531 3.53-1.414 1.415zM17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
      />
    </svg>
  );
}
