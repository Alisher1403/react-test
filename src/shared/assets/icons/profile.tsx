import type { SVGProps } from "react";

export function ProfileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="currentColor" d="M12 12.25a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5" />
      <path fill="currentColor" d="M3.5 21.25c.35-4.4 3.18-7 8.5-7s8.15 2.6 8.5 7z" />
    </svg>
  );
}
