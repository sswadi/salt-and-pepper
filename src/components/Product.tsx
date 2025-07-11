import { products } from "@wix/stores";
import Link from "next/link";

import WixImage from "./WixImage";
import Badge, { getFormattedPrice } from "./ui/badge";
import DiscountBadge from "./DiscountBadge";

interface ProductProps {
  product: products.Product; //this component takes a prop called product, and it must match the shape of a product as defined by Wix’s backend
}

export default function Product({ product }: ProductProps) {
  const mainImage = product.media?.mainMedia?.image;

  return (
    <Link href={`/products/${product.slug}`} className="bg-card h-full border">
      <div className="relative overflow-hidden">
        <WixImage
          mediaIdentifier={mainImage?.url}
          alt={mainImage?.altText}
          height={700}
          width={700}
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute right-3 bottom-3 flex flex-wrap items-center gap-1">
          {product.ribbon && <Badge>{product.ribbon}</Badge>}
          {product.discount && <DiscountBadge data={product.discount} />}
          <Badge className="bg-secondary text-secondary-foreground font-semibold">
            {getFormattedPrice(product)}
          </Badge>
        </div>
      </div>

      <div className="space-y-3 p-3">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <div
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: product.description || "" }}
        />
      </div>
    </Link>
  );
}
