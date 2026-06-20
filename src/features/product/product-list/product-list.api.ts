import { useInfiniteQuery } from "@tanstack/react-query";
import { axiosClient } from "@src/shared/config/custom-axios";
import { getNextPageParam } from "@src/shared/lib/tanstack-query/get-next-page-param";
import { productsUpserted } from "@src/entities/product/product.slice";
import { useAppDispatch } from "@src/app/store/hooks";
import type { GetProductsParams, GetProductsResponse } from "@src/shared/api/types/products";

export function useGetProducts(props?: GetProductsParams) {
  const dispatch = useAppDispatch();
  const response = useInfiniteQuery({
    queryKey: ["product-list", props],
    queryFn: async ({ pageParam }) => {
      const response = await axiosClient.get<GetProductsResponse>("https://dummyjson.com/products", { params: pageParam });
      dispatch(productsUpserted(response.products));
      return response;
    },
    getNextPageParam: getNextPageParam,
    select: ({ pages }) => pages.flatMap((x) => x.products),
    initialPageParam: { skip: 0, limit: props?.limit },
  });

  return response;
}
