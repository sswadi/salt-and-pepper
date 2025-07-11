import { WixClient } from "@/lib/wix-client.base";
import { collections } from "@wix/stores";
import { cache } from "react";

export const getCollectionBySlug = cache(
  async (wixClient: WixClient, slug: string) => {
    const { collection } =
      await wixClient.collections.getCollectionBySlug(slug);

    return collection || null;
  },
);

// we are cache-ing it as we will be using the result in Navbar, and also in shop filter side bar
export const getCollections = cache(
  // passing wixClient on the outside allows us to call it on browser or server depending
  async (wixClient: WixClient): Promise<collections.Collection[]> => {
    const collections = await wixClient.collections
      .queryCollections()
      .ne("_id", "56abd0ce-9dbb-1b67-439f-e60a3f8c2e77") //exclude this(featured products) from the collections page
      .find();

    return collections.items;
  },
);
