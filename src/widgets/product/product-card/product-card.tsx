import { useAppSelector } from "@src/app/store/hooks";
import { productSelectors } from "@src/entities/product/product.slice";
import { HoverPreview } from "@src/shared/ui";

type ProductCardProps = {
  productId: number;
};

export function ProductCard(props: ProductCardProps) {
  const product = useAppSelector((state) => productSelectors.selectById(state, props.productId));
  if (!product) return null;

  return (
    <div className="max-w-60 w-full">
      <HoverPreview className="h-60 w-full border border-gray-200">
        {product.images.map((image) => (
          <img key={image} src={image} className="h-full w-full object-cover" />
        ))}
      </HoverPreview>
      {/* {JSON.stringify(product)} */}
    </div>
  );
}
