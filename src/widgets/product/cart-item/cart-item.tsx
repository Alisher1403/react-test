import { useAppSelector } from "@src/app/store/hooks";
import { productSelectors } from "@src/entities/product/product.slice";
import { useAddToCart, useAddToFavorite } from "@src/features/product";
import { CheckIcon, HeartFilledActiveIcon, HeartFilledIcon, MinusIcon, PlusIcon } from "@src/shared/assets/icons";
import { formatPrice } from "@src/shared/utils";
import { Link } from "react-router";

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
      <Link
        to={`/product/${product.id}`}
        aria-label={`Открыть товар ${product.title}`}
        className="absolute inset-0 z-0 rounded-3xl"
      />

      <header className="relative z-10 mb-4 flex items-center gap-2 pointer-events-none">
        <span className="grid size-10 place-items-center rounded-xl bg-neutral-900 text-lg font-bold text-white">
          {product.brand?.charAt(0)}
        </span>

        <div>
          <h2 className="font-bold">{product.brand || "Продавец маркетплейса"} ›</h2>
          <p className="text-sm text-label-secondary">Магазин</p>
        </div>
      </header>

      <div className="relative z-10 flex gap-4 pointer-events-none">
        <div className="relative aspect-3/4 w-[9.25rem] shrink-0 overflow-hidden rounded-xl border-2 border-white bg-white">
          <span className="absolute left-0 top-0 z-10 grid size-9 place-items-center rounded-lg bg-yellow-400">
            <CheckIcon className="size-6" />
          </span>

          <img src={product.thumbnail} alt={product.title} className="size-full object-contain" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col pb-14 sm:pb-0">
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 text-sm leading-5">{product.title}</h3>

              <p className="mt-1 text-sm text-price-sale">В наличии: {product.stock} шт.</p>
            </div>

            <button
              type="button"
              onClick={toggleFavorite}
              className="pointer-events-auto grid size-9 shrink-0 cursor-pointer place-items-center rounded-full"
            >
              {isFavorite ? <HeartFilledActiveIcon className="w-8" /> : <HeartFilledIcon className="w-8" />}
            </button>
          </div>

          <strong className="mt-2 text-2xl text-price-sale">{formatPrice(product.price)} сум</strong>

          <p className="mt-1 text-sm">
            <span className="text-sky-500">●</span> {product.shippingInformation}
          </p>

          <p className="mt-1 text-sm text-label-secondary">{product.availabilityStatus}</p>

          <div className="pointer-events-auto absolute bottom-4 right-4 flex min-h-10 w-32 items-center justify-between rounded-2xl bg-container-secondary p-1 sm:bottom-5 sm:right-5">
            <button
              type="button"
              onClick={decrement}
              className="cursor-pointer rounded-xl p-2 hover:bg-control-secondary"
            >
              <MinusIcon className="size-4 text-label" />
            </button>

            <span className="font-medium">{cartCount}</span>

            <button
              type="button"
              disabled={isMaximumReached}
              onClick={increment}
              className="grid size-8 cursor-pointer place-items-center rounded-xl hover:bg-control-secondary disabled:cursor-not-allowed disabled:opacity-40"
            >
              <PlusIcon className="size-4 text-label" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
