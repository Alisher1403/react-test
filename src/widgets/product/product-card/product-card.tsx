import { useAppSelector } from "@src/app/store/hooks";
import { productSelectors } from "@src/entities/product/product.slice";
import { useAddToFavorite } from "@src/features/product";
import { HeartFilledActiveIcon, HeartFilledIcon } from "@src/shared/assets/icons";
import { HoverPreview, IndexIndicator } from "@src/shared/ui";
import { formatPrice } from "@src/shared/utils";
import { useState } from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

type ProductCardProps = {
  productId: number;
};

export function ProductCard(props: ProductCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const product = useAppSelector((state) => productSelectors.selectById(state, props.productId));
  const { isFavorite, toggleFavorite } = useAddToFavorite({ productId: props.productId });

  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`}>
      <article className="w-full font-sans text-gray-900">
        <div className="relative">
          <HoverPreview
            onIndexChange={setActiveImageIndex}
            className="aspect-3/4 w-full rounded-xl bg-container-primary sm:rounded-2xl"
          >
            {product.images.map((image) => (
              <img key={image} src={image} alt={product.title} className="h-full w-full object-contain" />
            ))}
          </HoverPreview>

          <button onClick={toggleFavorite} className="absolute top-1 right-1 p-2 cursor-pointer rounded-xl">
            {isFavorite ? <HeartFilledActiveIcon className="w-7 sm:w-8" /> : <HeartFilledIcon className="w-7 sm:w-8" />}
          </button>
        </div>

        <IndexIndicator count={product.images.length} activeIndex={activeImageIndex} className="mt-1" />

        <h4 className="mt-1 line-clamp-2 text-sm text-label sm:text-base">{product.title}</h4>

        <p
          className={twMerge(
            "line-clamp-2 text-base font-bold text-label sm:text-headline",
            product.discountPercentage && "text-price-sale",
          )}
        >
          {formatPrice(product.price)} сум
        </p>
      </article>
    </Link>
  );
}
