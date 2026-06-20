import { FlatList } from "@src/shared/ui";
import { ProductCard } from "@src/widgets/product";
import { useModel } from "./favorites.model";
import { ScrollRestoration } from "react-router";

export default function Favorites() {
  const { productIds } = useModel();

  return (
    <section className="container px-4 py-10">
      <ScrollRestoration />
      <h1 className="text-3xl font-bold">Избранное</h1>
      <p className="mt-1 text-label-secondary">
        Товаров: {productIds.length}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <FlatList
          data={productIds}
          render={({ item: productId }) => <ProductCard key={productId} productId={productId} />}
          ListEmptyComponent={
            <div className="col-span-full rounded-3xl bg-container-primary px-6 py-16 text-center">
              <h2 className="text-xl font-bold">В избранном пока нет товаров</h2>
              <p className="mt-2 text-label-secondary">Добавленные в избранное товары появятся здесь.</p>
            </div>
          }
        />
      </div>
    </section>
  );
}
