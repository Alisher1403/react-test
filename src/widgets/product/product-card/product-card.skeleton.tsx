export function ProductCardSkeleton() {
  return (
    <div className="w-full">
      <div className="aspect-3/4 w-full animate-pulse rounded-xl bg-gray-200 sm:rounded-2xl" />
      <div className="mt-2 h-5 w-full animate-pulse rounded-xl bg-gray-200 sm:mt-3 sm:h-8 sm:rounded-2xl" />
      <div className="mt-2 h-5 w-1/2 animate-pulse rounded-xl bg-gray-200 sm:h-8 sm:rounded-2xl" />
    </div>
  );
}
