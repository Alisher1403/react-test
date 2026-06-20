import { LargeButton } from "@src/features/product";
import type { Product } from "@src/shared/api/types/products";
import { Button } from "@src/shared/ui";

type ProductAsideProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export function ProductAside({ product }: ProductAsideProps) {
  const hasDiscount = product.discountPercentage > 0;
  const salePrice = hasDiscount ? product.price * (1 - product.discountPercentage / 100) : product.price;

  return (
    <aside className="w-full space-y-3 xl:sticky xl:top-28">
      <section className="rounded-2xl bg-container-primary p-4 sm:rounded-3xl">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <strong className="text-2xl leading-none font-bold text-price-sale sm:text-3xl">
            {priceFormatter.format(salePrice)}
          </strong>
          {hasDiscount && (
            <>
              <span className="text-label-secondary line-through">{priceFormatter.format(product.price)}</span>
              <span className="font-medium text-label-secondary">-{product.discountPercentage.toFixed(0)}%</span>
            </>
          )}
        </div>

        <div className="mt-5 space-y-2 border-t border-gray-300 pt-4 text-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="text-label-secondary">Availability</span>
            <span className="font-medium">{product.availabilityStatus}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-label-secondary">In stock</span>
            <span className="font-medium">{product.stock} items</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-label-secondary">Minimum order</span>
            <span className="font-medium">{product.minimumOrderQuantity}</span>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
          <Button type="default" size="large">
            Buy now
          </Button>
          <LargeButton productId={product.id} />
        </div>
      </section>

      <section className="rounded-2xl bg-container-primary p-4 sm:rounded-3xl">
        <h2 className="text-lg font-bold">Delivery and protection</h2>
        <dl className="mt-3 space-y-3 text-sm">
          <div>
            <dt className="font-medium">Shipping</dt>
            <dd className="mt-0.5 text-label-secondary">{product.shippingInformation}</dd>
          </div>
          <div>
            <dt className="font-medium">Warranty</dt>
            <dd className="mt-0.5 text-label-secondary">{product.warrantyInformation}</dd>
          </div>
          <div>
            <dt className="font-medium">Returns</dt>
            <dd className="mt-0.5 text-label-secondary">{product.returnPolicy}</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-2xl bg-container-primary p-4 sm:rounded-3xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs tracking-wide text-label-secondary uppercase">{product.category}</p>
            <h2 className="mt-1 text-lg font-bold">{product.brand || product.title}</h2>
            <p className="mt-1 text-sm text-label-secondary">SKU: {product.sku}</p>
          </div>
          <span className="rounded-full bg-white px-3 py-1.5 text-sm font-bold ring-1 ring-gray-200">
            {"\u2605"} {product.rating.toFixed(1)}
          </span>
        </div>
        <p className="mt-4 text-sm text-label-secondary">{product.reviews.length} review(s)</p>
      </section>
    </aside>
  );
}
