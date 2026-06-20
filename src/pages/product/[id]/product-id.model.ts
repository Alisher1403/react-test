import { useGetProduct, useGetProductsByCategory } from "@src/features/product";
import { useParams } from "react-router";

type PageParams = { id: string };

export function useModel() {
  const route = useParams<PageParams>();
  const response = useGetProduct({ productId: Number(route.id) });
  const similarProductsResponse = useGetProductsByCategory({
    categoryName: response.data?.category,
    limit: 12,
  });

  return { response, similarProductsResponse };
}
