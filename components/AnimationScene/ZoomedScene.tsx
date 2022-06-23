import React, { useCallback, useRef } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SceneProps } from "./scene";
import { useAnimationContext } from "~/hooks/useAnimationContext";

const horizontalStretchAnimation = keyframes`
  from {
    transform: scale(0, 1);
   }
  to   {
    transform: scale(1, 1);
  }
`;

const verticalRectStretchAnimation = keyframes`
  from {
    transform: scale(1, 0);
   }
  to   {
    transform: scale(1, 1);
  }
`;

const moveCharaAnimation1 = keyframes`
  from {
    transform: translate(200%, 200%) rotate(45deg) scale(2.5);
  }
  to   {
    transform: translate(5%, 5%) rotate(45deg) scale(2.5);
  }
`;

const moveCharaAnimation2 = keyframes`
  from {
    transform: translate(5%, 5%) rotate(45deg) scale(2.5);
  }
  to   {
    transform: translate(0%, 0%) rotate(45deg) scale(2.5);
  }
`;

const moveCharaAnimation3 = keyframes`
  from {
    transform: translate(0%, 0%) rotate(45deg) scale(2.5);
  }
  to   {
    transform: translate(-200%, -200%) rotate(45deg) scale(2.5);
  }
`;

const moveCharaAnimation4 = keyframes`
  0% {
    transform: translate(-200%, -200%) rotate(45deg) scale(2);
  }
  25% {
    transform: translate(-14%, -83%) scale(6) rotate(0deg);
  }
  50% {
    transform: translate(126%, 95%) scale(6) rotate(52deg);
  }
  75% {
    transform: translate(-27%, 15%) scale(6) rotate(43deg);
  }
  100% {
    transform: translate(-88%, 101%) scale(6) rotate(-43deg);
  }
`;

const moveCharaAnimation5 = keyframes`
  0% {
    transform: translate(0%, 0%) rotate(5deg) scale(2.5);
  }
  100% {
    transform: translate(0%, 0%) rotate(0deg) scale(2);
  }
`;

const fadeoutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to   {
    opacity: 0;
  }
`;

const hideCanvasAnimation = keyframes`
  from {
    transform: scale(1, 1) rotateX(0);
  }
  to {
    transform: scale(0, 1) rotateY(720deg);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ActorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  animation: 1s ease 6s 1 running forwards ${hideCanvasAnimation};
`;

const BackgroundAWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--chakra-colors-teal-100);
`;

const Rect = styled.div`
  position: absolute;
`;

const HorisontalRect = styled(Rect)`
  width: 100%;
  height: 5%;
  background-color: rgba(255, 255, 255, 0.5);
  animation: 0.3s linear 0.5s 1 running both ${horizontalStretchAnimation};
`;

const VerticalRect = styled(Rect)`
  width: 5%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  animation: 0.3s linear 0.8s 1 running both ${verticalRectStretchAnimation};
`;

const Chara = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: 0.3s ease-out 0.9s 1 running both ${moveCharaAnimation1},
    1s linear 1.2s 1 running forwards ${moveCharaAnimation2},
    0.3s ease-in 2.2s 1 running forwards ${moveCharaAnimation3},
    1s steps(1, start) 2.5s 1 running forwards ${moveCharaAnimation4},
    1.5s ease 3.5s 1 running forwards ${moveCharaAnimation5};

  @media (min-aspect-ratio: 1/1) and (max-height: 360px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 360px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const WhiteoutRect = styled(Rect)`
  width: 100%;
  height: 100%;
  background-color: var(--chakra-colors-white-full);
  opacity: 0;
  animation: 0.1s steps(2, jump-none) 2.5s 1 running forwards
      ${fadeoutAnimation},
    0.8s linear 3.5s 1 running forwards ${fadeoutAnimation};
`;

export interface ZoomedSceneProps extends SceneProps {}

export const ZoomedScene: React.VFC<ZoomedSceneProps> = ({
  changeNextScene,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationContext = useAnimationContext();
  const animationEnd: React.AnimationEventHandler<HTMLDivElement> = useCallback(
    (eve) => {
      if (eve.target !== wrapperRef.current) return;

      changeNextScene();
    },
    [changeNextScene],
  );

  return (
    <Wrapper>
      <ActorWrapper ref={wrapperRef} onAnimationEnd={animationEnd}>
        <BackgroundAWrapper>
          <HorisontalRect
            style={{ top: "2.5%", transformOrigin: "center right" }}
          />
          <HorisontalRect
            style={{ top: "12.5%", transformOrigin: "center left" }}
          />
          <HorisontalRect
            style={{ top: "22.5%", transformOrigin: "center right" }}
          />
          <HorisontalRect
            style={{ top: "32.5%", transformOrigin: "center left" }}
          />
          <HorisontalRect
            style={{ top: "42.5%", transformOrigin: "center right" }}
          />
          <HorisontalRect
            style={{ top: "52.5%", transformOrigin: "center left" }}
          />
          <HorisontalRect
            style={{ top: "62.5%", transformOrigin: "center right" }}
          />
          <HorisontalRect
            style={{ top: "72.5%", transformOrigin: "center left" }}
          />
          <HorisontalRect
            style={{ top: "82.5%", transformOrigin: "center right" }}
          />
          <HorisontalRect
            style={{ top: "92.5%", transformOrigin: "center left" }}
          />
          <VerticalRect
            style={{ left: "2.5%", transformOrigin: "bottom center" }}
          />
          <VerticalRect
            style={{ left: "12.5%", transformOrigin: "top center" }}
          />
          <VerticalRect
            style={{ left: "22.5%", transformOrigin: "bottom center" }}
          />
          <VerticalRect
            style={{ left: "32.5%", transformOrigin: "top center" }}
          />
          <VerticalRect
            style={{ left: "42.5%", transformOrigin: "bottom center" }}
          />
          <VerticalRect
            style={{ left: "52.5%", transformOrigin: "top center" }}
          />
          <VerticalRect
            style={{ left: "62.5%", transformOrigin: "bottom center" }}
          />
          <VerticalRect
            style={{ left: "72.5%", transformOrigin: "top center" }}
          />
          <VerticalRect
            style={{ left: "82.5%", transformOrigin: "bottom center" }}
          />
          <VerticalRect
            style={{ left: "92.5%", transformOrigin: "top center" }}
          />
        </BackgroundAWrapper>
        <Chara
          src={animationContext.images["chara.png"]}
          smallSrc={animationContext.images["chara_s.png"]}
        />
        <WhiteoutRect />
      </ActorWrapper>
    </Wrapper>
  );
};
