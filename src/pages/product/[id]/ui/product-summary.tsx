import type { Product } from "@src/shared/api/types/products";

type ProductSummaryProps = {
  product: Product;
};

export function ProductSummary({ product }: ProductSummaryProps) {
  return (
    <section className="min-w-0 pt-1">
      {product.brand && <p className="text-sm font-medium text-label-secondary">{product.brand}</p>}
      <h1 className="mt-1 text-xl leading-tight font-bold sm:text-2xl">{product.title}</h1>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <span className="font-medium text-amber-500">
          {"\u2605"} {product.rating}
        </span>
        <span className="text-label-secondary">Отзывов: {product.reviews.length}</span>
        <span className="text-label-secondary">&middot; В наличии: {product.stock}</span>
      </div>

      <dl className="mt-5 space-y-3 text-sm sm:mt-8">
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Артикул</dt>
          <dd className="-mb-px bg-white pl-2 font-medium">{product.sku}</dd>
        </div>
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Бренд</dt>
          <dd className="-mb-px bg-white pl-2 font-medium">{product.brand || "Не указан"}</dd>
        </div>
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Размеры</dt>
          <dd className="-mb-px max-w-3/5 bg-white pl-2 text-right font-medium">
            {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} см
          </dd>
        </div>
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Вес</dt>
          <dd className="-mb-px bg-white pl-2 font-medium">{product.weight} г</dd>
        </div>
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Остаток</dt>
          <dd className="-mb-px bg-white pl-2 font-medium">{product.stock} шт.</dd>
        </div>
      </dl>

      <a href="#characteristics" className="mt-4 inline-flex text-sm font-bold hover:underline">
        Все характеристики &rarr;
      </a>
    </section>
  );
}
