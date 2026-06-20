import { useAppSelector } from "@src/app/store/hooks";
import { productSelectors } from "@src/entities/product/product.slice";
import { useAddToFavorite } from "@src/features/product";
import { HeartFilledActiveIcon, HeartFilledIcon } from "@src/shared/assets/icons";
import { HoverPreview } from "@src/shared/ui";
import { formatPrice } from "@src/shared/utils";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

type ProductCardProps = {
  productId: number;
};

export function ProductCard(props: ProductCardProps) {
  const product = useAppSelector((state) => productSelectors.selectById(state, props.productId));
  const { isFavorite, toggleFavorite } = useAddToFavorite({ productId: props.productId });

  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`}>
      <article className="w-full font-sans text-gray-900">
        <div className="relative">
          <HoverPreview className="aspect-3/4 w-full rounded-xl bg-container-primary sm:rounded-2xl">
            {product.images.map((image) => (
              <img key={image} src={image} alt={product.title} className="h-full w-full object-contain" />
            ))}
          </HoverPreview>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite();
            }}
            className="absolute top-1.5 right-1.5 p-2 cursor-pointer rounded-xl sm:top-2 sm:right-2"
          >
            {isFavorite ? <HeartFilledActiveIcon className="w-7 sm:w-8" /> : <HeartFilledIcon className="w-7 sm:w-8" />}
          </button>
        </div>

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
