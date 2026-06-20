import { useEffect, useRef } from "react";
import type { FlatListProps } from "./flat-list.types";

export function useModel<T>(props: FlatListProps<T>) {
  const { data = [], onEndReached, onEndReachedThreshold = 0.2 } = props;
  const dataLength = data.length;

  const markerRef = useRef<HTMLDivElement>(null);
  const onEndReachedRef = useRef(onEndReached);
  const lastTriggeredLengthRef = useRef<number | null>(null);

  useEffect(() => {
    onEndReachedRef.current = onEndReached;
  }, [onEndReached]);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker || !IntersectionObserver) return;
    const threshold = Math.min(Math.max(onEndReachedThreshold, 0), 1);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || lastTriggeredLengthRef.current === dataLength) return;

        lastTriggeredLengthRef.current = dataLength;
        onEndReachedRef.current?.();
      },
      { threshold },
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, [dataLength, onEndReachedThreshold]);

  return { markerRef, data };
}
