import { createImageContext } from "~/hooks/useImageContext";

const imageNames = [
  "chara.png",
  "chara_s.png",
  "bubble.png",
  "bubble_s.png",
  "item.png",
  "item.png",
  "item_s.png",
  "logo.png",
  "logo_s.png",
] as const;

const { ImageContext, useImageContext, useImageContextValue } =
  createImageContext(imageNames, (imageName) => `/assets/img/top/${imageName}`);

export {
  ImageContext as TopImageContext,
  useImageContext as useTopImageContext,
  useImageContextValue as useTopImageContextValue,
};
