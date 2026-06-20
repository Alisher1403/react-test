import { Button, Collapse, ConfigProvider, Drawer, Input, InputNumber, Select } from "antd";
import { useState, type Dispatch, type SetStateAction } from "react";
import { initialCatalogFilters, type CatalogFilterState } from "../catalog.types";

type CatalogFiltersProps = {
  filters: CatalogFilterState;
  setFilters: Dispatch<SetStateAction<CatalogFilterState>>;
  showTitle?: boolean;
};

const theme = {
  token: {
    colorPrimary: "#fcd604",
    colorPrimaryText: "#191817",
    colorText: "#191817",
    colorTextSecondary: "#8c8a87",
    borderRadius: 12,
    controlHeight: 40,
  },
  components: {
    Collapse: {
      contentPadding: "0 0 12px",
      headerPadding: "10px 0",
    },
  },
};

const ratingOptions = [
  { value: 4, label: "4 и выше" },
  { value: 3, label: "3 и выше" },
  { value: 2, label: "2 и выше" },
  { value: 1, label: "1 и выше" },
];

export function CatalogFilters({ filters, setFilters, showTitle = true }: CatalogFiltersProps) {
  const updateFilters = (changes: Partial<CatalogFilterState>) => {
    setFilters((current) => ({ ...current, ...changes }));
  };

  const collapseItems = [
    {
      key: "price-rating",
      label: "Цена и рейтинг",
      children: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <InputNumber
              min={0}
              value={filters.minPrice}
              onChange={(value) => updateFilters({ minPrice: value })}
              placeholder="Цена от"
              variant="filled"
              className="w-full!"
            />
            <InputNumber
              min={0}
              value={filters.maxPrice}
              onChange={(value) => updateFilters({ maxPrice: value })}
              placeholder="Цена до"
              variant="filled"
              className="w-full!"
            />
          </div>
          <Select
            allowClear
            value={filters.minRating}
            onChange={(value) => updateFilters({ minRating: value ?? null })}
            options={ratingOptions}
            placeholder="Минимальный рейтинг"
            variant="filled"
            className="w-full!"
          />
          <InputNumber
            min={0}
            max={100}
            value={filters.minDiscount}
            onChange={(value) => updateFilters({ minDiscount: value })}
            placeholder="Минимальная скидка, %"
            variant="filled"
            className="w-full! mt-3!"
          />
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider theme={theme}>
      <div>
        <div className={`mb-4 flex items-center gap-3 ${showTitle ? "justify-between" : "justify-end"}`}>
          {showTitle && <h2 className="font-bold">Фильтры</h2>}
          <Button type="link" size="small" onClick={() => setFilters(initialCatalogFilters)}>
            Сбросить всё
          </Button>
        </div>

        <Input
          allowClear
          value={filters.search}
          onChange={(event) => updateFilters({ search: event.target.value })}
          placeholder="Поиск товаров"
          variant="filled"
        />
        <Collapse ghost defaultActiveKey={["price-rating"]} items={collapseItems} expandIconPosition="end" />
      </div>
    </ConfigProvider>
  );
}

export function MobileCatalogFilters(props: CatalogFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ConfigProvider theme={theme}>
      <Button block size="large" onClick={() => setIsOpen(true)}>
        Фильтры
      </Button>
      <Drawer
        title="Фильтры"
        placement="bottom"
        height="85vh"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        styles={{ body: { overflowY: "auto" } }}
      >
        <CatalogFilters {...props} showTitle={false} />
      </Drawer>
    </ConfigProvider>
  );
}
