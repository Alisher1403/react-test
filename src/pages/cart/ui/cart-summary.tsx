import { Button } from "@src/shared/ui";
import { formatPrice } from "@src/shared/utils";

type CartSummaryProps = {
  hasProducts: boolean;
  itemsCount: number;
  total: number;
};

export function CartSummary({ hasProducts, itemsCount, total }: CartSummaryProps) {
  return (
    <aside className="space-y-4 lg:sticky lg:top-28">
      <Button type="primary" size="large" disabled={!hasProducts} className="w-full">
        Перейти к оформлению
      </Button>

      <section className="rounded-3xl bg-container-primary p-4">
        <input
          type="text"
          placeholder="Промокод"
          className="h-14 w-full rounded-2xl bg-white px-4 outline-none placeholder:text-label-secondary"
        />

        <div className="mt-5 space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <span>
              Товаров: {itemsCount}
            </span>
            <strong>
              {formatPrice(total) ?? 0} {"\u0441\u0443\u043c"}
            </strong>
          </div>
          <div className="flex justify-between gap-4 text-label-secondary">
            <span>Доставка</span>
            <span>Рассчитаем при оформлении</span>
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between gap-4 border-t border-gray-300 pt-4">
          <strong>Итого</strong>
          <strong className="text-3xl text-price-sale">
            {formatPrice(total) ?? 0} {"\u0441\u0443\u043c"}
          </strong>
        </div>
      </section>
    </aside>
  );
}
