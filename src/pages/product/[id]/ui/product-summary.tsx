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
        <span className="text-label-secondary">({product.reviews.length} reviews)</span>
        <span className="text-label-secondary">&middot; {product.stock} available</span>
      </div>

      <dl className="mt-5 space-y-3 text-sm sm:mt-8">
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">SKU</dt>
          <dd className="-mb-px bg-white pl-2 font-medium">{product.sku}</dd>
        </div>
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Brand</dt>
          <dd className="-mb-px bg-white pl-2 font-medium">{product.brand || "Not specified"}</dd>
        </div>
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Dimensions</dt>
          <dd className="-mb-px max-w-3/5 bg-white pl-2 text-right font-medium">
            {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
          </dd>
        </div>
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Weight</dt>
          <dd className="-mb-px bg-white pl-2 font-medium">{product.weight} g</dd>
        </div>
        <div className="flex items-end justify-between gap-2 border-b border-dotted border-gray-300">
          <dt className="-mb-px bg-white pr-2 text-label-secondary">Stock</dt>
          <dd className="-mb-px bg-white pl-2 font-medium">{product.stock} items</dd>
        </div>
      </dl>

      <a href="#characteristics" className="mt-4 inline-flex text-sm font-bold hover:underline">
        All specifications &rarr;
      </a>
    </section>
  );
}
