import { useGetProductCategories } from "@src/features/product";
import { emptyNodeList } from "@src/shared/utils/react-utils";

export function DefaultLayoutCategories() {
  const { data, isLoading } = useGetProductCategories();
  const categories = data?.slice(0, 10) ?? [];

  return (
    <nav className="hidden border-b border-gray-100 bg-white lg:block">
      <div className="container overflow-x-auto py-2">
        <div className="flex min-w-max items-center gap-4 whitespace-nowrap text-sm font-medium sm:gap-7">
          {isLoading &&
            emptyNodeList(10, (p) => <span {...p} className="h-4 w-24 animate-pulse rounded-full bg-gray-200" />)}

          {categories.map((category) => (
            <span key={category} className="cursor-default capitalize text-label-secondary hover:text-label">
              {category}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
