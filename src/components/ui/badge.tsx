import { cn, formatCurrency } from "@/lib/utils";
import { products } from "@wix/stores";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "bg-primary text-primary-foreground w-fit px-2 py-1 text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function getFormattedPrice(product: products.Product) {
  const minPrice = product.priceRange?.minValue;
  const maxPrice = product.priceRange?.maxValue;

  if (minPrice && maxPrice && minPrice !== maxPrice) {
    return `from ${formatCurrency(minPrice, product.priceData?.currency)}`;
  } else {
    return (
      product.priceData?.formatted?.discountedPrice ||
      "n/a" ||
      product.priceData?.formatted?.price
    );
  }
}
