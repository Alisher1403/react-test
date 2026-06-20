import { CategoryGridIcon, SearchIcon } from "@src/shared/assets/icons";

export function DefaultLayoutMobileHeader() {
  return (
    <header className="sticky top-0 z-1000 bg-white py-2 lg:hidden">
      <div className="container flex items-center gap-2">
        <button type="button" className="p-2 cursor-pointer rounded-xl bg-container-primary text-label-secondary">
          <CategoryGridIcon className="size-6" />
        </button>

        <label className="flex h-10 min-w-0 flex-1 items-center rounded-2xl bg-container-primary px-3 text-label-secondary">
          <SearchIcon className="mr-2 size-5 shrink-0" />
          <span className="sr-only">Search products</span>
          <input
            type="search"
            placeholder="Search products"
            className="min-w-0 flex-1 bg-transparent text-sm text-label outline-none placeholder:text-label-secondary"
          />
        </label>
      </div>
    </header>
  );
}
