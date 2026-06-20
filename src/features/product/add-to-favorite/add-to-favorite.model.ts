import { useAppDispatch, useAppSelector } from "@src/app/store/hooks";
import { favoriteToggled } from "@src/entities/product/favorite.slice";
import { productSelectors, productsUpdated } from "@src/entities/product/product.slice";

type Props = {
  productId: number;
};

export function useAddToFavorite(props: Props) {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => productSelectors.selectById(state, props.productId));
  const isFavorite = product.isFavorite;

  function toggleFavorite() {
    if (!product) return;
    dispatch(productsUpdated({ id: product.id, changes: { isFavorite: !product.isFavorite } }));
    dispatch(favoriteToggled(product.id));
  }

  return { isFavorite, toggleFavorite };
}
