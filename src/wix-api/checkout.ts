import { env } from "@/env";
import { WIX_STORES_APP_ID } from "@/lib/constants";
import { findVariant } from "@/lib/utils";
import { WixClient } from "@/lib/wix-client.base";
import { checkout } from "@wix/ecom";
import { products } from "@wix/stores";

export async function getCheckoutUrlForCurrentCart(wixClient: WixClient) {
  //     In Wix eCommerce, a checkoutId is a unique identifier that represents a specific checkout session started from the user's cart. This ID is used to: Track the checkout process, Link the cart to payment
  // , Redirect the user to the appropriate checkout page (web, mobile, etc.), Retrieve checkout status later
  const { checkoutId } =
    await wixClient.currentCart.createCheckoutFromCurrentCart({
      channelType: checkout.ChannelType.WEB,
    });

  const { redirectSession } = await wixClient.redirects.createRedirectSession({
    ecomCheckout: { checkoutId },
    callbacks: {
      postFlowUrl: window.location.href, // where to come back if checkout is aborted
      thankYouPageUrl: env.NEXT_PUBLIC_BASE_URL + "/checkout-success",
    },
  });

  if (!redirectSession) {
    throw Error("Failed to create redirect session");
  }

  return redirectSession.fullUrl;
}

export interface GetCheckoutUrlForProductValues {
  product: products.Product;
  quantity: number;
  selectedOptions: Record<string, string>;
}

export async function getCheckoutUrlForProduct(
  wixClient: WixClient,
  { product, quantity, selectedOptions }: GetCheckoutUrlForProductValues,
) {
  const selectedVariant = findVariant(product, selectedOptions);

  const { _id } = await wixClient.checkout.createCheckout({
    channelType: checkout.ChannelType.WEB, // specifies this is a web checkout
    lineItems: [
      {
        catalogReference: {
          appId: WIX_STORES_APP_ID,
          catalogItemId: product._id,
          options: selectedVariant
            ? {
                variantId: selectedVariant._id,
              }
            : { options: selectedOptions },
        },
        quantity,
      },
    ],
  });

  if (!_id) {
    throw new Error("Failed to create checkout");
  }

  const { redirectSession } = await wixClient.redirects.createRedirectSession({
    ecomCheckout: { checkoutId: _id },
    callbacks: {
      postFlowUrl: window.location.href,
      thankYouPageUrl: env.NEXT_PUBLIC_BASE_URL + "/checkout-success",
    },
  });

  if (!redirectSession) {
    throw Error("Failed to create redirect session");
  }

  return redirectSession.fullUrl;
}
