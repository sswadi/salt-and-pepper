/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes } from "react"; //A TypeScript type from React that includes all valid <img> props (like onLoad, className, etc.)

import { media as wixMedia } from "@wix/sdk";

//omit is a TS attribute
type WixImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "width" | "height" | "alt"
> & {
  mediaIdentifier: string | undefined; //we removed the src bcz our wix img will take a special string value to get the img from. It can be a url/string
  placeholder?: string;
  alt?: string | null | undefined;
} & (
    | {
        scaleToFill?: true;
        width: number;
        height: number;
      }
    | { scaleToFill: false }
  );

export default function WixImage({
  mediaIdentifier,
  placeholder = "/placeholder.png",
  alt,
  ...props
}: WixImageProps) {
  const imageUrl = mediaIdentifier
    ? props.scaleToFill || props.scaleToFill === undefined
      ? wixMedia.getScaledToFillImageUrl(
          mediaIdentifier,
          props.width,
          props.height,
          {},
        )
      : wixMedia.getImageUrl(mediaIdentifier).url
    : placeholder;
  return <img src={imageUrl} alt={alt || ""} {...props} />;
}
