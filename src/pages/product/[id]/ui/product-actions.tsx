import { useAddToFavorite } from "@src/features/product";
import { HeartIcon } from "@src/shared/assets/icons";
import type { Product } from "@src/shared/api/types/products";

type ProductActionsProps = {
  data: Product;
};

export function ProductActions({ data }: ProductActionsProps) {
  const { isFavorite, toggleFavorite } = useAddToFavorite({ productId: data.id });

  return (
    <div className="flex flex-col gap-3 py-4 sm:py-6 md:flex-row md:items-center md:justify-between">
      <div className="min-w-0 text-sm font-medium">
        <p className="line-clamp-2 text-subheadline-1 text-label-secondary capitalize md:truncate">
          Products / {data.category} / {data.tags.join(" / ")}
        </p>
      </div>

      <button
        type="button"
        onClick={toggleFavorite}
        className={`flex shrink-0 cursor-pointer items-center gap-1.5 self-end whitespace-nowrap hover:text-red-600 md:self-auto ${isFavorite ? "text-red-600" : ""}`}
      >
        <HeartIcon />
        {isFavorite ? "In favorites" : "Add to favorites"}
      </button>
    </div>
  );
}
