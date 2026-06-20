export type CatalogFilterState = {
  search: string;
  minPrice: number | null;
  maxPrice: number | null;
  minRating: number | null;
  minDiscount: number | null;
};

export const initialCatalogFilters: CatalogFilterState = {
  search: "",
  minPrice: null,
  maxPrice: null,
  minRating: null,
  minDiscount: null,
};
