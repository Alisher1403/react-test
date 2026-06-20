import type { Product } from "@src/shared/api/types/products";

type ProductAboutProps = {
  product: Product;
};

export function ProductAbout({ product }: ProductAboutProps) {
  return (
    <section className="mt-10 grid gap-4 pt-6 sm:mt-16 sm:gap-6 sm:pt-8 md:grid-cols-[10rem_1fr] lg:grid-cols-[12rem_1fr]">
      <h2 className="text-xl font-bold">О товаре</h2>

      <div className="max-w-4xl">
        <p className="leading-6">{product.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-container-primary px-3 py-1 text-sm text-label-secondary">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mt-7 text-lg font-bold">Общие характеристики</h3>
        <dl className="mt-3 text-sm">
          <div className="flex flex-col gap-1 border-b border-gray-200 py-3 sm:flex-row sm:justify-between sm:gap-4">
            <dt className="text-label-secondary">Категория</dt>
            <dd className="font-medium capitalize">{product.category}</dd>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-200 py-3 sm:flex-row sm:justify-between sm:gap-4">
            <dt className="text-label-secondary">Штрихкод</dt>
            <dd className="font-medium">{product.meta.barcode}</dd>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-200 py-3 sm:flex-row sm:justify-between sm:gap-4">
            <dt className="text-label-secondary">Минимальный заказ</dt>
            <dd className="font-medium">{product.minimumOrderQuantity}</dd>
          </div>
          <div className="flex flex-col gap-1 border-gray-200 py-3 sm:flex-row sm:justify-between sm:gap-4">
            <dt className="text-label-secondary">Доступность</dt>
            <dd className="font-medium">{product.availabilityStatus}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
