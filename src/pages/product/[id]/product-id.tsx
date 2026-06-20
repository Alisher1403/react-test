import { ScrollRestoration } from "react-router";
import { useModel } from "./product-id.model";
import { ProductAbout } from "./ui/product-about";
import { ProductAside } from "./ui/product-aside";
import { ProductGallery } from "./ui/product-gallery";
import { ProductHeader } from "./ui/header";
import { ProductReviews } from "./ui/product-reviews";
import { ProductSummary } from "./ui/product-summary";
import { SimilarProducts } from "./ui/similar-products";

export default function ProductId() {
  const { response, similarProductsResponse } = useModel();
  const { data } = response;

  if (response.isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <span className="size-16 animate-spin rounded-full border-4 border-container-secondary border-t-primary" />
      </div>
    );
  }

  if (response.isError) {
    return <div className="container py-16 text-price-sale">Не удалось загрузить товар.</div>;
  }

  if (!data) return null;

  return (
    <section className="container-large pb-10 sm:pb-16">
      <ScrollRestoration />

      <ProductHeader product={data} />

      <div className="grid items-start gap-12 xl:grid-cols-[calc(100%-392px)_360px]">
        <div className="grid gap-6 lg:grid-cols-2">
          <ProductGallery images={data.images} title={data.title} />
          <ProductSummary product={data} />
        </div>

        <ProductAside product={data} />

        <div className="min-w-0 xl:col-start-1 xl:row-start-2">
          <ProductAbout product={data} />
          <ProductReviews product={data} />
        </div>
      </div>

      <SimilarProducts product={data} similarProductsResponse={similarProductsResponse} />
    </section>
  );
}
