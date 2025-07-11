import { products } from "@wix/stores";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// import tailwindConfig from "../../tailwind.config";

export const twConfig = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function to format currency
export function formatCurrency(
  price: number | string = 0,
  currency: string = "INR",
) {
  //this is a JS function
  return Intl.NumberFormat("en", { style: "currency", currency }).format(
    Number(price),
  );
}

export function findVariant(
  product: products.Product,
  selectedOptions: Record<string, string>,
) {
  if (!product.manageVariants) return null;
  return (
    product.variants?.find((variant) => {
      // For each variant, it checks whether every [key, value] pair from selectedOptions is present in the variant's choices
      return Object.entries(selectedOptions).every(
        ([key, value]) => variant.choices?.[key] === value,
      );
    }) || null
  );
}

export function checkInStock(
  product: products.Product,
  selectedOptions: Record<string, string>,
) {
  const variant = findVariant(product, selectedOptions);

  return variant
    ? variant.stock?.quantity !== 0 && variant.stock?.inStock
    : product.stock?.inventoryStatus === products.InventoryStatus.IN_STOCK ||
        product.stock?.inventoryStatus ===
          products.InventoryStatus.PARTIALLY_OUT_OF_STOCK;
}
