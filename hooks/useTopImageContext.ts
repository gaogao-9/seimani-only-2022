import { createImageContext } from "~/hooks/useImageContext";

const imageNames = ["chara.png", "bubble.png", "item.png"] as const;

const { ImageContext, useImageContext, useImageContextValue } =
  createImageContext(imageNames, (imageName) => `/assets/img/top/${imageName}`);

export {
  ImageContext as TopImageContext,
  useImageContext as useTopImageContext,
  useImageContextValue as useTopImageContextValue,
};
