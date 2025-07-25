import { wixBrowserClient } from "@/lib/wix-client.browser";
import {
  getCheckoutUrlForCurrentCart,
  getCheckoutUrlForProduct,
  GetCheckoutUrlForProductValues,
} from "@/wix-api/checkout";
import { useState } from "react";
import { useToast } from "./use-toast";

export function useCartCheckout() {
  const { toast } = useToast();

  const [pending, setPending] = useState(false);

  async function startCheckoutFlow() {
    setPending(true);

    try {
      const checkoutUrl = await getCheckoutUrlForCurrentCart(wixBrowserClient);
      if (!checkoutUrl) {
        throw new Error("No checkout URL returned");
      }
      window.location.href = checkoutUrl;
    } catch (error) {
      setPending(false);
      console.error(error);
      toast("Failed to load checkout. Please try again");
    }
  }

  return { startCheckoutFlow, pending };
}

export function useQuickBuy() {
  const { toast } = useToast();

  const [pending, setPending] = useState(false);

  async function startCheckoutFlow(values: GetCheckoutUrlForProductValues) {
    setPending(true);

    try {
      const checkoutUrl = await getCheckoutUrlForProduct(
        wixBrowserClient,
        values,
      );
      if (!checkoutUrl) {
        throw new Error("No checkout URL returned");
      }
      window.location.href = checkoutUrl;
    } catch (error) {
      setPending(false);
      console.error(error);
      toast("Failed to load checkout. Please try again.");
    }
  }

  return { startCheckoutFlow, pending };
}
