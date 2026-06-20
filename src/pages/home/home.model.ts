import { useGetProducts } from "@src/features/product";

export function useModel() {
  const response = useGetProducts();

  return {
    response,
  };
}
