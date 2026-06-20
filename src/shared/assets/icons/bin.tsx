import type { SVGProps } from "react";

export function BinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3.999v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h2.16L14 4v1.5h-.998l-.719 6.814A3 3 0 0 1 9.3 14.999H6.7a3 3 0 0 1-2.983-2.685L2.998 5.5H2V4zm2-1.5h2a.5.5 0 0 1 .5.5v1h-3v-1a.5.5 0 0 1 .5-.5m-1.792 9.657L4.507 5.5h6.986l-.702 6.656A1.5 1.5 0 0 1 9.3 13.5H6.7a1.5 1.5 0 0 1-1.492-1.343"
      />
    </svg>
  );
}
