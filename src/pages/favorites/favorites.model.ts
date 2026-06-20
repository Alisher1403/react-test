import { useAppSelector } from "@src/app/store/hooks";
import { selectFavoriteProductIds } from "@src/entities/product/favorite.slice";

export function useModel() {
  const productIds = useAppSelector(selectFavoriteProductIds);

  return { productIds };
}
