import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@src/shared/config/custom-axios";

export function useGetProductCategories() {
  return useQuery({
    queryKey: ["product-category-list"],
    queryFn: () => axiosClient.get<string[]>("https://dummyjson.com/products/category-list"),
    staleTime: Infinity,
  });
}
