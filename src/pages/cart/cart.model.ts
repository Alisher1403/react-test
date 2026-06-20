import { useAppDispatch, useAppSelector } from "@src/app/store/hooks";
import {
  cartCleared,
  selectCartItemsCount,
  selectCartProductIds,
  selectCartTotal,
} from "@src/entities/product/cart.slice";
import { productsUpdated } from "@src/entities/product/product.slice";
import { useGetProducts } from "@src/features/product";

export function useModel() {
  const dispatch = useAppDispatch();
  const productIds = useAppSelector(selectCartProductIds);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const total = useAppSelector(selectCartTotal);
  const recommendations = useGetProducts({ limit: 12 });

  function clearCart() {
    productIds.forEach((productId) => {
      dispatch(productsUpdated({ id: productId, changes: { cartCount: 0 } }));
    });
    dispatch(cartCleared());
  }

  return {
    clearCart,
    itemsCount,
    productIds,
    recommendations,
    total,
  };
}
