import { useModel } from "./home.model";
import { MainBanners } from "@src/widgets/product";
import Products from "./ui/products";

export default function Home() {
  const { response } = useModel();

  return (
    <div>
      <div className="container mb-2 py-3 sm:mb-4 sm:py-6">
        <MainBanners />
      </div>
      <Products response={response} />
    </div>
  );
}
