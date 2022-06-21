import { createContext, useContext, useState } from "react";

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

type ImageNames = typeof imageNames extends ReadonlyArray<infer T> ? T : never;

export type AnimationContext = {
  loaded: boolean;
  images: { [k in ImageNames]: string };
  init: () => void;
  dispose: () => void;
};

export const AnimationContext = createContext<AnimationContext | null>(null);

export const useAnimationContext = (): AnimationContext =>
  useContext(AnimationContext) as AnimationContext;

export const useAnimationContextValue = (): AnimationContext => {
  const [state, setState] = useState<AnimationContext>({
    loaded: false,
    images: {} as AnimationContext["images"],
    async init() {
      const loadImages = async () => {
        const images = {} as { [k in ImageNames]: string };

        for (const imageName of imageNames) {
          const arrayBuffer = await fetch(`/assets/img/anim/${imageName}`).then(
            (res) => res.arrayBuffer(),
          );
          const blob = new Blob([arrayBuffer], { type: "image/png" });
          const url = URL.createObjectURL(blob);

          images[imageName] = url;
        }

        return images;
      };

      const imagesPromise = loadImages();
      const delayPromise = new Promise((resolve) => setTimeout(resolve, 1000));
      const [images] = await Promise.all([imagesPromise, delayPromise]);

      setState({
        ...state,
        loaded: true,
        images,
      });
    },
    dispose() {
      for (const imageURL of Object.values(state.images)) {
        URL.revokeObjectURL(imageURL);
      }

      setState({
        ...state,
        loaded: false,
        images: {} as AnimationContext["images"],
      });
    },
  });

  return state;
};
