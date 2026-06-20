import { useGetProductCategories } from "@src/features/product";
import { emptyNodeList } from "@src/shared/utils/react-utils";
import { useEffect } from "react";
import { Link } from "react-router";

type MobileCatalogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileCatalog({ isOpen, onClose }: MobileCatalogProps) {
  const { data: categories = [], isLoading } = useGetProductCategories();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 top-14 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-999 overflow-y-auto bg-white">
      <div className="container py-1">
        {isLoading &&
          emptyNodeList(10, (p) => <div {...p} className="my-2 h-10 animate-pulse rounded-xl bg-container-primary" />)}

        {!isLoading &&
          categories.map((category) => (
            <Link
              key={category}
              to={`/catalog/${category}`}
              onClick={onClose}
              className="flex min-h-11 w-full cursor-pointer items-center justify-between rounded-xl px-2 text-left text-sm capitalize hover:bg-container-primary"
            >
              <span>{category.replace(/-/g, " ")}</span>
              <span className="text-2xl leading-none text-label-secondary">{"\u203a"}</span>
            </Link>
          ))}

        {!isLoading && categories.length === 0 && (
          <p className="py-10 text-center text-sm text-label-secondary">Категории не найдены</p>
        )}
      </div>
    </div>
  );
}
