import { ScrollRestoration } from "react-router";
import { useModel } from "./cart.model";
import { CartItems } from "./ui/cart-items";
import { CartRecommendations } from "./ui/cart-recommendations";
import { CartSummary } from "./ui/cart-summary";

export default function Cart() {
  const { clearCart, itemsCount, productIds, recommendations, total } = useModel();

  return (
    <main className="container-small px-4 py-8 sm:px-6">
      <ScrollRestoration />

      <h1 className="text-3xl font-bold">Корзина</h1>

      <div className="mt-5 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <CartItems itemsCount={itemsCount} productIds={productIds} onClear={clearCart} />
        <CartSummary hasProducts={productIds.length > 0} itemsCount={itemsCount} total={total} />
      </div>

      <CartRecommendations isLoading={recommendations.isLoading} products={recommendations.data} />
    </main>
  );
}
