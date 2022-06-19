import React, { useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SceneProps } from "./scene";
import { useAnimationContext } from "./useAnimationContext";

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const syerobuDAnimation = keyframes`
  0% {
    transform: translate(calc(-50% - 150%), calc(-50% + 150%)) rotateY(360deg) scale(1, 1);
  }
  25% {
    transform: translate(calc(-50% - 75%), calc(-50% + 75%)) rotateY(360deg) scale(1, 1);
  }
  40% {
    transform: translate(calc(-50%), calc(-50%)) rotateY(0deg) scale(1, 1);
  }
  90% {
    transform: translate(calc(-50%), calc(-50%)) rotateY(0deg) scale(1, 1);
  }
  100% {
    transform: translate(calc(-50%), calc(-50% - 200%)) rotateY(0deg) scale(1, 1);
  }
`;

const hirariDAnimation = keyframes`
  0% {
    transform: translate(calc(-50% + 150%), calc(-50% + 150%)) rotateY(360deg) scale(1, 1);
  }
  25% {
    transform: translate(calc(-50% + 75%), calc(-50% + 75%)) rotateY(360deg) scale(1, 1);
  }
  40% {
    transform: translate(calc(-50%), calc(-50%)) rotateY(0deg) scale(1, 1);
  }
  90% {
    transform: translate(calc(-50%), calc(-50%)) rotateY(0deg) scale(1, 1);
  }
  100% {
    transform: translate(calc(-50%), calc(-50% - 200%)) rotateY(0deg) scale(1, 1);
  }
`;

const syrobuCAnimation = keyframes`
  0% {
    animation-timing-function: ease;
    transform: translate(200%, -40%) scale(3);
  }
  20% {
    animation-timing-function: linear;
    transform: translate(10%, -40%) scale(3);
  }
  55% {
    animation-timing-function: linear;
    transform: translate(0, -40%) scale(3);
  }
  90% {
    animation-timing-function: ease;
    transform: translate(-10%, -40%) scale(3);
  }
  100% {
    transform: translate(-200%, -40%) scale(3);
  }
`;

const hirariCAnimation = keyframes`
  0% {
    animation-timing-function: ease;
    transform: translate(-200%, -40%) scale(3);
  }
  20% {
    animation-timing-function: linear;
    transform: translate(-10%, -40%) scale(3);
  }
  55% {
    animation-timing-function: linear;
    transform: translate(0, -40%) scale(3);
  }
  90% {
    animation-timing-function: ease;
    transform: translate(10%, -40%) scale(3);
  }
  100% {
    transform: translate(200%, -40%) scale(3);
  }
`;

const CharacterWrapper = styled.div``;

const RectAnimation = keyframes`
  0% {
    transform: scale(1, 0);
    transform-origin: center top;
  }
  10% {
    transform: scale(1, 1);
    transform-origin: center top;
  }
  90% {
    transform: scale(1, 1);
    transform-origin: center bottom;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: center bottom;
  }
`;

const Rect = styled("div", {
  shouldForwardProp: (propName) => !["color"].includes(propName.toString()),
})<{ color: "yellow" | "pink" }>`
  overflow: hidden;
  background-color: ${(prop) =>
    prop.color === "yellow"
      ? "var(--chakra-colors-yellow-100)"
      : "var(--chakra-colors-pink-100)"};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--chakra-colors-white-full);
  animation: 1s linear 0s 1 running both ${fadeInAnimation};
`;

const ActorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TransformWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 300px;

  & > *,
  & > * > * {
    position: absolute;
  }

  & > [data-actor="syerobu_d"] {
    left: 25%;
    bottom: -10%;
    width: 40%;
    animation: 3s ease 1.5s 1 running both ${syerobuDAnimation};
  }

  & > [data-actor="hirari_d"] {
    left: 75%;
    bottom: -10%;
    width: 40%;
    animation: 3s ease 5.5s 1 running both ${hirariDAnimation};
  }

  & > [data-actor="character_wrapper_r"] {
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;

    & > [data-actor="syerobu_c"] {
      top: 50%;
      right: 0;
      width: 100%;
      transform: translate(200%, -40%) scale(3);
      animation: 3s ease 1.5s 1 running both ${syrobuCAnimation};
    }
  }

  & > [data-actor="character_wrapper_l"] {
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;

    & > [data-actor="hirari_c"] {
      top: 50%;
      right: 0;
      width: 100%;
      transform: translate(-200%, -40%) scale(3);
      animation: 3s ease 5.5s 1 running both ${hirariCAnimation};
    }
  }

  & > [data-actor="yellow_rect"] {
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    animation: 3.4s ease 1.3s 1 running both ${RectAnimation};
  }

  & > [data-actor="pink_rect"] {
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    animation: 3.4s ease 5.3s 1 running both ${RectAnimation};
  }
`;

export interface RotateSceneProps extends SceneProps {}

export const RotateScene: React.VFC<RotateSceneProps> = ({
  changeNextScene,
}) => {
  const animationContext = useAnimationContext();
  const animationEnd = useCallback(() => {
    changeNextScene();
  }, [changeNextScene]);

  return (
    <Wrapper>
      <ActorWrapper>
        <TransformWrapper>
          <Rect color="yellow" data-actor="yellow_rect" />
          <Rect
            color="pink"
            data-actor="pink_rect"
            onAnimationEnd={animationEnd}
          />
          <img
            src={animationContext.images["syerobu_d.png"]}
            alt="デフォルメシェロブ"
            data-actor="syerobu_d"
          />
          <img
            src={animationContext.images["hirari_d.png"]}
            alt="デフォルメヒラリィ"
            data-actor="hirari_d"
          />
          <CharacterWrapper data-actor="character_wrapper_r">
            <img
              src={animationContext.images["syerobu_c.png"]}
              alt="シェロブ"
              data-actor="syerobu_c"
            />
          </CharacterWrapper>
          <CharacterWrapper data-actor="character_wrapper_l">
            <img
              src={animationContext.images["hirari_c.png"]}
              alt="ヒラリィ"
              data-actor="hirari_c"
            />
          </CharacterWrapper>
        </TransformWrapper>
      </ActorWrapper>
    </Wrapper>
  );
};
