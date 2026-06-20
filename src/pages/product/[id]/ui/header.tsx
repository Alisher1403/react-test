import { useAddToFavorite } from "@src/features/product";
import type { Product } from "@src/shared/api/types/products";
import { BackIcon, HeartFilledActiveIcon, HeartFilledIcon, HeartIcon, SearchIcon } from "@src/shared/assets/icons";
import { useNavigate } from "react-router";

type ProductHeaderProps = {
  product: Product;
};

export function ProductHeader({ product }: ProductHeaderProps) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useAddToFavorite({ productId: product.id });

  return (
    <>
      <header className="sticky top-0 z-1000 -mx-3 flex items-center justify-between bg-container-primary px-2 py-2 lg:hidden">
        <div className="flex rounded-2xl bg-white shadow-sm overflow-hidden">
          <button onClick={() => navigate(-1)} className="p-2 cursor-pointer">
            <BackIcon className="size-8 fill-label-secondary" />
          </button>
          <button className="p-2 cursor-pointer">
            <SearchIcon className="size-8 fill-label-secondary" />
          </button>
        </div>

        <button onClick={toggleFavorite} className="bg-white p-2 cursor-pointer rounded-2xl shadow-sm">
          {isFavorite ? <HeartFilledActiveIcon className="w-8" /> : <HeartFilledIcon className="w-8" />}
        </button>
      </header>

      <header className="hidden gap-3 py-6 lg:flex lg:items-center lg:justify-between">
        <p className="min-w-0 truncate text-subheadline-1 font-medium text-label-secondary capitalize">
          Товары / {product.category} / {product.tags.join(" / ")}
        </p>

        <button
          onClick={toggleFavorite}
          className={`flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap hover:text-red-600 ${isFavorite ? "text-red-600" : ""}`}
        >
          <HeartIcon />
          {isFavorite ? "В избранном" : "В избранное"}
        </button>
      </header>
    </>
  );
}
