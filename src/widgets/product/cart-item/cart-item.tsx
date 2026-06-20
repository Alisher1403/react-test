import { useAppSelector } from "@src/app/store/hooks";
import { productSelectors } from "@src/entities/product/product.slice";
import { useAddToCart, useAddToFavorite } from "@src/features/product";
import { CheckIcon, HeartFilledActiveIcon, HeartFilledIcon, MinusIcon, PlusIcon } from "@src/shared/assets/icons";
import { formatPrice } from "@src/shared/utils";

export type CartItemProps = {
  productId: number;
};

export function CartItem({ productId }: CartItemProps) {
  const product = useAppSelector((state) => productSelectors.selectById(state, productId));
  const { cartCount, decrement, increment, isMaximumReached } = useAddToCart({ productId });
  const { isFavorite, toggleFavorite } = useAddToFavorite({ productId });

  if (!product) return null;

  return (
    <article className="relative rounded-3xl bg-container-primary p-4 sm:p-5">
      <header className="mb-4 flex items-center gap-2">
        <span className="grid size-10 place-items-center rounded-xl bg-neutral-900 text-lg font-bold text-white">
          {product.brand?.charAt(0)}
        </span>
        <div>
          <h2 className="font-bold">{product.brand || "Marketplace seller"} ›</h2>
          <p className="text-sm text-label-secondary">Store</p>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-[9.25rem_minmax(0,1fr)]">
        <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-white border-2 border-white">
          <span className="absolute top-0 left-0 z-10 grid size-9 place-items-center rounded-lg bg-yellow-400 text-xl font-bold">
            <CheckIcon className="size-6" />
          </span>
          <img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain" />
        </div>

        <div className="flex flex-col pb-14 sm:pb-0">
          <div className="flex items-start gap-3">
            <div className=" flex-1">
              <h3 className="line-clamp-2 text-sm leading-5">{product.title}</h3>
              <p className="mt-1 text-sm text-price-sale">{product.stock} items available</p>
            </div>

            <button
              type="button"
              onClick={toggleFavorite}
              className="grid size-9 shrink-0 cursor-pointer place-items-center rounded-full"
            >
              {isFavorite ? <HeartFilledActiveIcon className="w-8" /> : <HeartFilledIcon className="w-8" />}
            </button>
          </div>

          <strong className="mt-2 text-2xl text-price-sale">{formatPrice(product.price)} сум</strong>
          <p className="mt-1 text-sm">
            <span className="text-sky-500">●</span> {product.shippingInformation}
          </p>
          <p className="mt-1 text-sm text-label-secondary">{product.availabilityStatus}</p>

          <div className="absolute right-4 bottom-4 flex min-h-10 w-32 items-center justify-between rounded-2xl bg-container-secondary p-1 sm:right-5 sm:bottom-5">
            <button
              type="button"
              onClick={decrement}
              className="p-2 cursor-pointer rounded-xl hover:bg-control-secondary"
            >
              <MinusIcon />
            </button>
            <span className="font-medium">{cartCount}</span>
            <button
              type="button"
              disabled={isMaximumReached}
              onClick={increment}
              className="grid size-8 cursor-pointer place-items-center rounded-xl hover:bg-control-secondary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <PlusIcon />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
