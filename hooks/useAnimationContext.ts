import { createImageContext } from "~/hooks/useImageContext";

const imageNames = [
  "yasmin.png",
  "yasmin_s.png",
  "yasmin_m.png",
  "yasmin_m_s.png",
  "momoka.png",
  "momoka_s.png",
  "momoka_m.png",
  "momoka_m_s.png",
  "chara.png",
  "chara_s.png",
] as const;

const { ImageContext, useImageContext, useImageContextValue } =
  createImageContext(
    imageNames,
    (imageName) => `/assets/img/anim/${imageName}`,
  );

export {
  ImageContext as AnimationContext,
  useImageContext as useAnimationContext,
  useImageContextValue as useAnimationContextValue,
};
