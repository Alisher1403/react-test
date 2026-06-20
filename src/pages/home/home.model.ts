import { useGetProducts } from "@src/features/product";

export function useModel() {
  const response = useGetProducts({ delay: 1000, limit: 24 });

  return { response };
}
