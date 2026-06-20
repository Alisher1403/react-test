import { ScrollRestoration } from "react-router";
import { useModel } from "./product-id.model";
import { ProductAbout } from "./ui/product-about";
import { ProductActions } from "./ui/product-actions";
import { ProductAside } from "./ui/product-aside";
import { ProductGallery } from "./ui/product-gallery";
import { ProductReviews } from "./ui/product-reviews";
import { ProductSummary } from "./ui/product-summary";
import { SimilarProducts } from "./ui/similar-products";

export default function ProductId() {
  const { response, similarProductsResponse } = useModel();
  const { data } = response;

  if (response.isLoading) {
    return <div className="container py-16 text-label-secondary">Loading product...</div>;
  }

  if (response.isError) {
    return <div className="container py-16 text-price-sale">Unable to load this product.</div>;
  }

  if (!data) return null;

  return (
    <section className="container-large pb-10 sm:pb-16">
      <ScrollRestoration />

      <ProductActions data={data} />

      <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_22.5rem]">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,.85fr)]">
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
