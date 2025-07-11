import { Tokens } from "@wix/sdk";
import Cookies from "js-cookie";
import { WIX_SESSION_COOKIE } from "./constants";
import { getWixClient } from "./wix-client.base";

const tokens: Tokens = JSON.parse(Cookies.get(WIX_SESSION_COOKIE) || "{}");

export const wixBrowserClient = getWixClient(tokens);

// unlike server comp, we don't need to create a seperate func for the client and we can create one single object and share it between our client component as the broser is not shared b/w different users; backend server is shared. tihs same object can be resued without the need to be creating the new client over and over again

// also not using context(to enable sharing b/w components) here as the the client never changes as it is fixed with the modules we use 
