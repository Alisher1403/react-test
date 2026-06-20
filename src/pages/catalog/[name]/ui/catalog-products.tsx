import type { Product } from "@src/shared/api/types/products";
import { FlatList } from "@src/shared/ui";
import { emptyNodeList } from "@src/shared/utils/react-utils";
import { ProductCard, ProductCardSkeleton } from "@src/widgets/product";
import type { UseQueryResult } from "@tanstack/react-query";

type CatalogProductsProps = {
  response: UseQueryResult<Product[]>;
  products: Product[];
};

export function CatalogProducts({ response, products }: CatalogProductsProps) {
  const { isLoading, isError } = response;

  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4">
      {isError && <p className="col-span-full py-12 text-center text-price-sale">Не удалось загрузить товары.</p>}
      {isLoading && emptyNodeList(12, ProductCardSkeleton)}

      <FlatList
        data={products}
        render={({ item }) => <ProductCard key={item.id} productId={item.id} />}
        ListEmptyComponent={
          !isLoading &&
          !isError && (
            <p className="col-span-full py-12 text-center text-label-secondary">В этой категории нет товаров.</p>
          )
        }
      />
    </div>
  );
}
