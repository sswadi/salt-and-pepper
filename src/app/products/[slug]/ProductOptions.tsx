import { products } from "@wix/stores";
import { Label } from "@/components/ui/label";
import { checkInStock, cn } from "@/lib/utils";

interface ProductOptionsProps {
  product: products.Product;
  selectedOptions: Record<string, string>;
  setSelectedOptions: (options: Record<string, string>) => void;
}

export default function ProductOptions({
  product,
  selectedOptions,
  setSelectedOptions,
}: ProductOptionsProps) {
  return (
    <div className="space-y-2.5">
      {product.productOptions?.map((option) => (
        <fieldset key={option.name} className="space-y-1.5">
          <legend>
            {/* adding asChild is bcz we cannot use Label inside a legend and we want the styling that comes with label tag. so we tell Shadcn to deliver a span only but with the stylign of label  */}
            <Label asChild>
              <span>{option.name}</span>
            </Label>
          </legend>
          <div className="flex flex-wrap items-center gap-1.5">
            {option.choices?.map((choice) => (
              <div key={choice.description}>
                <input
                  type="radio"
                  id={choice.description}
                  name={option.name} //ensure grouping to one category(like color or size) and which in turn ensures selection of one option at a time.
                  value={choice.description}
                  checked={
                    selectedOptions[option.name || ""] === choice.description
                  }
                  onChange={() =>
                    setSelectedOptions({
                      ...selectedOptions,
                      [option.name || ""]: choice.description || "",
                    })
                  }
                  className="peer hidden"
                />
                <Label
                  htmlFor={choice.description}
                  className={cn(
                    "peer-checked:border-primary flex min-w-14 cursor-pointer items-center justify-center gap-1.5 border p-2",
                    !checkInStock(product, {
                      ...selectedOptions,
                      [option.name || ""]: choice.description || "",
                    }) && "opacity-50",
                  )}
                >
                  {option.optionType === products.OptionType.color && (
                    <span
                      className="size-4 rounded-full border"
                      style={{ backgroundColor: choice.value }}
                    />
                  )}
                  <span>{choice.description}</span>
                </Label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
