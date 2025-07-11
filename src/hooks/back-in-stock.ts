import { wixBrowserClient } from "@/lib/wix-client.browser";
import {
  BackInStockNotificationRequestValues,
  createBackInStockNotificationRequest,
} from "@/wix-api/backInStockNotifications";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";

export function useCreateBackInStockNotificationRequest() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (values: BackInStockNotificationRequestValues) =>
      createBackInStockNotificationRequest(wixBrowserClient, values),
    onError(error) {
      console.error(error);
      if (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error as any).details.applicationError.code ===
        "BACK_IN_STOCK_NOTIFICATION_REQUEST_ALREADY_EXISTS"
      ) {
        toast("You are already subscribed to this product");
      } else {
        toast("Something went wrong. Please try again.");
      }
    },
  });
}
