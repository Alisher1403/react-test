import { twMerge } from "tailwind-merge";
import type { StarRatingProps } from "./star-rating.types";

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  const starCount = Math.max(1, Math.floor(max));
  const roundedRating = Math.round(Math.min(Math.max(rating, 0), starCount));

  return (
    <span
      className={twMerge("inline-flex text-lg tracking-wide text-amber-500 sm:text-2xl", className)}
    >
      {Array.from({ length: starCount }, (_, index) => (
        <span key={index}>
          {index < roundedRating ? "\u2605" : "\u2606"}
        </span>
      ))}
    </span>
  );
}
