import { BinIcon, CheckIcon } from "@src/shared/assets/icons";
import { Button, FlatList } from "@src/shared/ui";
import { CartItem } from "@src/widgets/product";
import { Link } from "react-router";

type CartItemsProps = {
  itemsCount: number;
  productIds: number[];
  onClear: () => void;
};

export function CartItems({ itemsCount, productIds, onClear }: CartItemsProps) {
  return (
    <section>
      <header className="mb-4 flex items-center justify-between gap-4 px-2">
        <p className="font-medium flex items-center">
          <span className="p-1 rounded-md bg-primary">
            <CheckIcon className="size-5" />
          </span>
          <span className="ml-2">Товаров: {itemsCount}</span>
        </p>
        {!!productIds.length && (
          <button
            onClick={onClear}
            className="flex shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap text-sm font-medium hover:text-red-600"
          >
            <BinIcon className="size-4" />
            <span>Удалить всё</span>
          </button>
        )}
      </header>

      <div className="space-y-4">
        <FlatList
          data={productIds}
          render={({ item: productId }) => <CartItem key={productId} productId={productId} />}
          ListEmptyComponent={
            <div className="rounded-3xl bg-container-primary px-6 py-16 text-center">
              <h2 className="text-xl font-bold">Корзина пуста</h2>
              <p className="mt-2 text-label-secondary">Добавьте товары, и они появятся здесь.</p>
              <Link to="/">
                <Button type="primary" size="small" className="mt-4">
                  На главную
                </Button>
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
}
