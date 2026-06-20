import { useModel } from "./flat-list.model";
import type { FlatListProps } from "./flat-list.types";

export function FlatList<T>(props: FlatListProps<T>) {
  const { data, markerRef } = useModel(props);

  return (
    <>
      {data.length === 0 && props.ListEmptyComponent}
      {data.map((item, index) => props.render && props.render({ item, index }))}
      <div ref={markerRef} className="pointer-events-none col-span-full h-px w-full opacity-0" />
      {props.ListFooterComponent}
    </>
  );
}
