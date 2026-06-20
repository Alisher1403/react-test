import type { ProductReview as ProductReviewData } from "@src/shared/api/types/products";
import { StarRating } from "@src/shared/ui";
import { formatDate, getInitials } from "@src/shared/utils";

export type ReviewProps = {
  review: ProductReviewData;
};

export function Review({ review }: ReviewProps) {
  return (
    <article className="border-t border-gray-200 py-5 first:border-t-0">
      <header className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-container-primary text-sm font-bold">
          {getInitials(review.reviewerName)}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-bold">{review.reviewerName}</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <StarRating rating={review.rating} />
            <time className="text-label-secondary" dateTime={review.date}>
              {formatDate(review.date)}
            </time>
          </div>
        </div>
      </header>

      <p className="mt-3 max-w-3xl break-words leading-6">{review.comment}</p>
    </article>
  );
}
