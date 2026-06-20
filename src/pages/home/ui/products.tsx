import { FlatList } from "@src/shared/ui";
import { ProductCard, ProductCardSkeleton } from "@src/widgets/product";
import { emptyNodeList } from "@src/shared/utils/react-utils";
import type { UseInfiniteQueryResult } from "@tanstack/react-query";
import type { Product } from "@src/shared/api/types/products";

type ProductsProps = {
  response: UseInfiniteQueryResult<Product[]>;
};

export default function Products(props: ProductsProps) {
  const { data, isLoading, isError, isFetchingNextPage, fetchNextPage } = props.response;

  return (
    <section className="container grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {isError && <p className="col-span-full py-12 text-center text-price-sale">Unable to load products.</p>}

      {isLoading && emptyNodeList(18, ProductCardSkeleton)}

      <FlatList
        data={data}
        render={({ item }) => <ProductCard key={item.id} productId={item.id} />}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListFooterComponent={isFetchingNextPage && emptyNodeList(6, ProductCardSkeleton)}
      />
    </section>
  );
}
