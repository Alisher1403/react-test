import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "@src/app/store/hooks";
import { productsUpserted } from "@src/entities/product/product.slice";
import type { Product } from "@src/shared/api/types/products";
import { axiosClient } from "@src/shared/config/custom-axios";

type Props = {
  productId: number;
};

export function useGetProduct({ productId }: Props) {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const product = await axiosClient.get<Product>(`https://dummyjson.com/products/${productId}`);
      dispatch(productsUpserted([product]));
      return product;
    },
    enabled: !!productId,
  });
}
