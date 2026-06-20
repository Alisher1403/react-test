import type { ReactNode } from "react";

export type FlatListRenderInfo<T> = {
  item: T;
  index: number;
};

export type FlatListProps<T> = {
  data?: readonly T[];
  render?: (info: FlatListRenderInfo<T>) => ReactNode;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
};
