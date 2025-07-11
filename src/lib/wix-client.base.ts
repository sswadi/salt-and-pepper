import { env } from "@/env";
import {
  backInStockNotifications,
  checkout,
  currentCart,
  orders,
  recommendations,
} from "@wix/ecom";
import { files } from "@wix/media";
import { members } from "@wix/members";
import { redirects } from "@wix/redirects";
import { reviews } from "@wix/reviews";
import { createClient, OAuthStrategy, Tokens } from "@wix/sdk";
import { collections, products } from "@wix/stores";

export function getWixClient(tokens: Tokens | undefined) {
  return createClient({
    modules: {
      products,
      collections,
      currentCart,
      checkout,
      redirects,
      orders,
      recommendations,
      backInStockNotifications,
      reviews,
      members,
      files,
    },
    auth: OAuthStrategy({
      clientId: env.NEXT_PUBLIC_WIX_CLIENT_ID,
      tokens, 
    }),
  });
}



export type WixClient = ReturnType<typeof getWixClient>;

// wix is your Wix SDK client.  "wix client",  refers to the object returned by your getWixClient() function.
// getWixClient() is a function that creates this client
// The client connects to the Wix backend using your project’s environment settings (like client ID + OAuth token)
