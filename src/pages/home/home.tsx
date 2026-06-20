import { ProductCard } from "@src/widgets/product/product-card/product-card";
import { useModel } from "./home.model";

export default function Home() {
  const { response } = useModel();
  const { data } = response;

  return (
    <div>
      <h1>Home</h1>
      {data && data.map((product) => <ProductCard key={product.id} productId={product.id} />)}
    </div>
  );
}
