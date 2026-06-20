import { CategoryGridIcon, SearchIcon } from "@src/shared/assets/icons";
import { MobileCatalog } from "@src/widgets/catalog/mobile-catalog";
import { useState } from "react";
import { useLocation } from "react-router";

export function DefaultLayoutMobileHeader() {
  const { pathname } = useLocation();
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  if (pathname.startsWith("/product/")) return null;

  return (
    <header className="sticky top-0 z-1000 bg-white py-2 lg:hidden">
      <div className="container flex items-center gap-2">
        <button
          onClick={() => setIsCatalogOpen((isOpen) => !isOpen)}
          className={`p-2 cursor-pointer rounded-xl bg-container-primary ${isCatalogOpen ? "text-label" : "text-label-secondary"}`}
        >
          <CategoryGridIcon className="size-6" />
        </button>

        <label className="flex h-10 min-w-0 flex-1 items-center rounded-2xl bg-container-primary px-3 text-label-secondary">
          <SearchIcon className="mr-2 size-5 shrink-0" />
          <span className="sr-only">Поиск товаров</span>
          <input
            type="search"
            placeholder="Поиск товаров"
            className="min-w-0 flex-1 bg-transparent text-sm text-label outline-none placeholder:text-label-secondary"
          />
        </label>
      </div>

      <MobileCatalog isOpen={isCatalogOpen} onClose={() => setIsCatalogOpen(false)} />
    </header>
  );
}
