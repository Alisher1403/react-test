import { MinusIcon, PlusIcon } from "@src/shared/assets/icons";
import { Button } from "@src/shared/ui";
import { useAddToCart } from "../add-to-cart.model";

type LargeButtonProps = {
  productId: number;
};

export function LargeButton({ productId }: LargeButtonProps) {
  const { cartCount, decrement, increment, isMaximumReached } = useAddToCart({ productId });

  if (cartCount === 0) {
    return (
      <Button type="primary" size="large" onClick={increment} className="w-full">
        Add to cart
      </Button>
    );
  }

  return (
    <div className="flex min-h-14 w-full items-center justify-between rounded-2xl bg-container-primary px-2">
      <button
        type="button"
        onClick={decrement}
        className="p-2 cursor-pointer rounded-xl text-label-secondary hover:text-label"
      >
        <MinusIcon />
      </button>
      <span className="font-bold">{cartCount}</span>
      <button
        type="button"
        disabled={isMaximumReached}
        onClick={increment}
        className="p-2 cursor-pointer rounded-xl text-label-secondary hover:text-label disabled:cursor-not-allowed disabled:opacity-40"
      >
        <PlusIcon />
      </button>
    </div>
  );
}
