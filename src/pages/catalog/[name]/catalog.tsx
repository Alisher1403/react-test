import { ScrollRestoration } from "react-router";
import { useModel } from "./catalog.model";
import { CatalogProducts } from "./ui/catalog-products";
import { CatalogFilters, MobileCatalogFilters } from "./ui/catalog-filters";

export default function Catalog() {
  const model = useModel();
  const { categoryName, response, filters, setFilters } = model;

  return (
    <div className="container py-4 sm:py-6">
      <ScrollRestoration />

      <h1 className="mb-5 text-xl font-bold capitalize sm:text-2xl">{categoryName}</h1>

      <div className="mb-5 lg:hidden">
        <MobileCatalogFilters filters={filters} setFilters={setFilters} />
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] overflow-y-auto scrollbar-hidden pr-2 lg:block">
          <CatalogFilters filters={filters} setFilters={setFilters} />
        </aside>
        <main className="min-w-0">
          <CatalogProducts response={response} products={response.data ?? []} />
        </main>
      </div>
    </div>
  );
}
