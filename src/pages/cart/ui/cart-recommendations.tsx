import type { Product } from "@src/shared/api/types/products";
import { FlatList } from "@src/shared/ui";
import { ProductCard, ProductCardSkeleton } from "@src/widgets/product";

type CartRecommendationsProps = {
  isLoading: boolean;
  products?: Product[];
};

export function CartRecommendations({ isLoading, products }: CartRecommendationsProps) {
  return (
    <section className="mt-10 lg:max-w-[calc(100%-26rem)]">
      <h2 className="text-2xl font-bold">You may also like</h2>

      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {isLoading && Array.from({ length: 12 }, (_, index) => <ProductCardSkeleton key={index} />)}

        <FlatList
          data={products}
          render={({ item }) => <ProductCard key={item.id} productId={item.id} />}
        />
      </div>
    </section>
  );
}
