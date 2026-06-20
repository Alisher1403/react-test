import type { ComponentType, ReactNode } from "react";

export function emptyNodeList(length: number, Component: ComponentType<{ key: number }>): ReactNode[] {
  return Array.from({ length }, (_, index) => <Component key={index} />);
}
