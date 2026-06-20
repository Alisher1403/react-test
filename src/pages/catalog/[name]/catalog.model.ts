import { useGetProductsByCategory } from "@src/features/product";
import { useState } from "react";
import { useParams } from "react-router";
import { initialCatalogFilters } from "./catalog.types";

export function useModel() {
  const { name: categoryName = "" } = useParams();
  const [filters, setFilters] = useState(initialCatalogFilters);
  const response = useGetProductsByCategory({ categoryName, ...filters });

  return { categoryName, response, filters, setFilters };
}
