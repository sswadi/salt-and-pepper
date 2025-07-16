import logo from "@/assets/logo2.png";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCart } from "@/wix-api/cart";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartButton from "./ShoppingCartButton";
import UserButton from "@/components/UserButton";
import { getLoggedInMember } from "@/wix-api/members";
import { getCollections } from "@/wix-api/collections";
import MainNavigation from "./MainNavigation";
import SearchField from "@/components/SearchField";
import MobileMenu from "./MobileMenu";
import { Suspense } from "react";

export default async function Navbar() {
  const wixClient = getWixServerClient();

  const [cart, loggedInMember, collections] = await Promise.all([
    getCart(await wixClient),
    getLoggedInMember(await wixClient),
    getCollections(await wixClient),
  ]);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 p-5">
        <Suspense>
          <MobileMenu
            collections={collections}
            loggedInMember={loggedInMember}
          />
        </Suspense>
        <div className="flex flex-wrap items-center gap-7">
          <Link href="/" className="flex flex-col items-center gap-2">
            <Image
              src={logo}
              alt="Salt & Pepper logo"
              width={80}
              height={90}
              className="rounded-2xl"
            />

            {/* <span className="font-mono text-xl font-medium text-slate-800">
              Salt & Pepper Wears
            </span> */}
            <span className="font-serif text-xs font-light text-gray-700">
              Salt & Pepper Wears
            </span>
          </Link>
          <MainNavigation
            collections={collections}
            className="hidden lg:flex"
          />
        </div>
        <SearchField className="hidden max-w-96 lg:inline" />
        <div className="flex items-center justify-center gap-5">
          <UserButton
            loggedInMember={loggedInMember}
            className="hidden lg:inline-flex"
          />
          <ShoppingCartButton initialData={cart} />
        </div>
      </div>
    </header>
  );
}
