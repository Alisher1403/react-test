import type { Product } from "@src/shared/api/types/products";
import { ProductCard, ProductCardSkeleton } from "@src/widgets/product";
import type { UseQueryResult } from "@tanstack/react-query";

type SimilarProductsProps = {
  similarProductsResponse?: UseQueryResult<Product[]>;
  product: Product;
};

export function SimilarProducts(props: SimilarProductsProps) {
  const { similarProductsResponse } = props;
  const { data: similarProducts = [], isLoading, isError } = similarProductsResponse ?? {};

  if (isError) return null;

  return (
    <section className="mt-10 border-t border-gray-200 pt-6 sm:mt-16 sm:pt-8">
      <h2 className="text-xl font-bold sm:text-2xl">Похожие товары</h2>

      <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-8 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 xl:grid-cols-6">
        {isLoading && Array.from({ length: 6 }, (_, index) => <ProductCardSkeleton key={index} />)}

        {!!similarProducts.length &&
          similarProducts.map((product) => <ProductCard key={product.id} productId={product.id} />)}
      </div>
    </section>
  );
}
