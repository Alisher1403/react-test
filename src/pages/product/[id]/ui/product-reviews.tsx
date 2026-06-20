import type { Product } from "@src/shared/api/types/products";
import { StarRating } from "@src/shared/ui";
import { Review } from "@src/widgets/product";

type ProductReviewsProps = {
  product: Product;
};

export function ProductReviews({ product }: ProductReviewsProps) {
  return (
    <section id="reviews" className="mt-10 grid gap-4 pt-6 sm:mt-12 sm:gap-6 sm:pt-8 md:grid-cols-[10rem_1fr] lg:grid-cols-[12rem_1fr]">
      <h2 className="text-xl font-bold">Отзывы</h2>

      <div className="max-w-4xl">
        <header className="mb-3 flex flex-wrap items-end gap-x-3 gap-y-1">
          <StarRating rating={product.rating} />
          <strong className="text-3xl leading-none sm:text-4xl">{product.rating.toFixed(1)}</strong>
          <span className="pb-0.5 text-sm text-label-secondary">
            Отзывов: {product.reviews.length}
          </span>
        </header>

        {product.reviews.length > 0 ? (
          product.reviews.map((review) => <Review key={`${review.reviewerEmail}-${review.date}`} review={review} />)
        ) : (
          <p className="py-5 text-label-secondary">У этого товара пока нет отзывов.</p>
        )}
      </div>
    </section>
  );
}
