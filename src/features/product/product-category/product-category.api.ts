import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "@src/app/store/hooks";
import { productsUpserted } from "@src/entities/product/product.slice";
import { axiosClient } from "@src/shared/config/custom-axios";
import type { GetProductsResponse } from "@src/shared/api/types/products";

type GetProductsByCategoryProps = {
  categoryName?: string;
  limit?: number;
};

export function useGetProductsByCategory(props: GetProductsByCategoryProps) {
  const { limit } = props;
  const categoryName = String(props.categoryName);
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ["product-list", "category", categoryName, { limit }],
    queryFn: async () => {
      const response = await axiosClient.get<GetProductsResponse>(
        `https://dummyjson.com/products/category/${encodeURIComponent(categoryName)}`,
        { params: props },
      );

      dispatch(productsUpserted(response.products));
      return response;
    },
    enabled: !!categoryName,
    select: (response) => response.products,
  });
}
