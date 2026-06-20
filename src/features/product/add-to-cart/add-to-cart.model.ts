import { useAppDispatch, useAppSelector } from "@src/app/store/hooks";
import { cartProductAdded, cartProductRemoved } from "@src/entities/product/cart.slice";
import { productSelectors, productsUpdated } from "@src/entities/product/product.slice";

type UseAddToCartProps = {
  productId: number;
};

export function useAddToCart({ productId }: UseAddToCartProps) {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => productSelectors.selectById(state, productId));
  const isInCart = !!product.cartCount;
  const cartCount = product?.cartCount ?? 0;
  const isMaximumReached = Boolean(product && cartCount >= product.stock);

  function increment() {
    if (!product || cartCount >= product.stock) return;

    if (!isInCart) dispatch(cartProductAdded(product.id));
    dispatch(productsUpdated({ id: product.id, changes: { cartCount: cartCount + 1 } }));
  }

  function decrement() {
    if (!product || cartCount === 0) return;
    const nextCount = cartCount - 1;
    dispatch(productsUpdated({ id: product.id, changes: { cartCount: nextCount } }));
    if (!nextCount) dispatch(cartProductRemoved(product.id));
  }

  return {
    cartCount,
    decrement,
    increment,
    isInCart,
    isMaximumReached,
  };
}
