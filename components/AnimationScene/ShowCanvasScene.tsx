import React, { useCallback, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SceneProps } from "./scene";
import { useAnimationContext } from "./useAnimationContext";

const fadeInAnimation = keyframes`
  0% {
    transform: rotate(-180deg) scale(0, 0);
  }

  20% {
    transform: rotate(-180deg) scale(1, 0.01);
    animation-timing-function: ease-in;
  }

  40% {
    transform: rotate(-180deg) scale(0, 0);
    animation-timing-function: ease-out;
  }

  60% {
    transform: rotate(-180deg) scale(0, 0);
    animation-timing-function: ease-out;
  }

  100% {
    transform: rotate(0deg) scale(1, 1);
  }
`;

const zoomedCharaMoveR = keyframes`
  0% {
    background-position-x: 0%;
    animation-timing-function: cubic-bezier(0, 1, 0, 1);
  }

  50% {
    background-position-x: 40%;
  }

  60% {
    background-position-x: 40%;
    animation-timing-function: ease;
  }

  100% {
    background-position-x: 110%;
  }
`;

const zoomedMaskedCharaMoveRA = keyframes`
  0% {
    -webkit-mask-position-x: 0%;
    mask-position-x: 0%;
  }

  50% {
    -webkit-mask-position-x: 37%;
    mask-position-x: 37%;
  }

  60% {
    -webkit-mask-position-x: 37%;
    mask-position-x: 37%;
    animation-timing-function: ease;
  }
  100% {
    -webkit-mask-position-x: 110%;
    mask-position-x: 110%;
  }
`;

const zoomedMaskedCharaMoveRB = keyframes`
  0% {
    -webkit-mask-position-x: 0%;
    mask-position-x: 0%;
  }

  50% {
    -webkit-mask-position-x: 34%;
    mask-position-x: 34%;
  }

  60% {
    -webkit-mask-position-x: 34%;
    mask-position-x: 34%;
    animation-timing-function: ease;
  }
  100% {
    -webkit-mask-position-x: 110%;
    mask-position-x: 110%;
  }
`;

const zoomedMaskedCharaMoveRC = keyframes`
  0% {
    -webkit-mask-position-x: 0%;
    mask-position-x: 0%;
  }

  50% {
    -webkit-mask-position-x: 31%;
    mask-position-x: 31%;
  }

  60% {
    -webkit-mask-position-x: 31%;
    mask-position-x: 31%;
    animation-timing-function: ease;
  }
  100% {
    -webkit-mask-position-x: 110%;
    mask-position-x: 110%;
  }
`;

const zoomedCharaMoveL = keyframes`
  0% {
    background-position-x: 110%;
    animation-timing-function: cubic-bezier(0, 1, 0, 1);
  }

  50% {
    background-position-x: 60%;
  }

  60% {
    background-position-x: 60%;
    animation-timing-function: ease;
  }

  100% {
    background-position-x: 0%;
  }
`;

const zoomedMaskedCharaMoveLA = keyframes`
  0% {
    -webkit-mask-position-x: 110%;
    mask-position-x: 110%;
  }

  50% {
    -webkit-mask-position-x: 63%;
    mask-position-x: 63%;
  }

  60% {
    -webkit-mask-position-x: 63%;
    mask-position-x: 63%;
    animation-timing-function: ease;
  }
  100% {
    -webkit-mask-position-x: 0%;
    mask-position-x: 0%;
  }
`;

const zoomedMaskedCharaMoveLB = keyframes`
  0% {
    -webkit-mask-position-x: 110%;
    mask-position-x: 110%;
  }

  50% {
    -webkit-mask-position-x: 66%;
    mask-position-x: 66%;
  }

  60% {
    -webkit-mask-position-x: 66%;
    mask-position-x: 66%;
    animation-timing-function: ease;
  }

  100% {
    -webkit-mask-position-x: 0%;
    mask-position-x: 0%;
  }
`;

const zoomedMaskedCharaMoveLC = keyframes`
  0% {
    -webkit-mask-position-x: 110%;
    mask-position-x: 110%;
  }

  50% {
    -webkit-mask-position-x: 69%;
    mask-position-x: 69%;
  }

  60% {
    -webkit-mask-position-x: 69%;
    mask-position-x: 69%;
    animation-timing-function: ease;
  }

  100% {
    -webkit-mask-position-x: 0%;
    mask-position-x: 0%;
  }
`;

const clipCircleAnimationAtRightBottom = keyframes`
  from {
    clip-path: circle(0% at 100% 100%);
  }

  to {
    clip-path: circle(142% at 100% 100%);
  }
`;

const clipCircleAnimationAtLeftBottom = keyframes`
  from {
    clip-path: circle(0% at 0% 100%);
  }

  to {
    clip-path: circle(142% at 0% 100%);
  }
`;

const clipCircleAnimationAtCenter = keyframes`
  from {
    clip-path: circle(0% at 50%);
  }

  to {
    clip-path: circle(142% at 50%);
  }
`;

const Rect = styled.div<{
  color:
    | "yellow"
    | "pink"
    | "blue"
    | "orange"
    | "green"
    | "red"
    | "purple"
    | "cyan"
    | "teal";
  delay: string;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => `var(--chakra-colors-${color}-100)`};
`;

const FadeInRightBottomRect = styled(Rect)`
  animation: 0.3s linear ${({ delay }) => delay} 1 running both
    ${clipCircleAnimationAtRightBottom};
`;

const FadeInLeftBottomRect = styled(Rect)`
  animation: 0.3s linear ${({ delay }) => delay} 1 running both
    ${clipCircleAnimationAtLeftBottom};
`;

const FadeInCenterRect = styled(Rect)`
  animation: 0.3s linear ${({ delay }) => delay} 1 running both
    ${clipCircleAnimationAtCenter};
`;

const Yasmin = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: 500%;
  background-position: 60% 30%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: 3s cubic-bezier(0, 1, 0, 1) 2.6s 1 running both ${zoomedCharaMoveL};

  @media (min-aspect-ratio: 1/1) and (max-height: 800px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 800px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const MaskedYasminA = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: url(${({ src }) => src});
  mask-size: 500%;
  mask-position: 62% 30%;
  mask-repeat: no-repeat;
  background-color: var(--chakra-colors-orange-300);
  animation: 3.1s cubic-bezier(0, 1, 0, 1) 2.5s 1 running both
    ${zoomedMaskedCharaMoveLA};

  @media (min-aspect-ratio: 1/1) and (max-height: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const MaskedYasminB = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: url(${({ src }) => src});
  mask-size: 500%;
  mask-position: 62% 30%;
  mask-repeat: no-repeat;
  background-color: var(--chakra-colors-orange-200);
  animation: 3.2s cubic-bezier(0, 1, 0, 1) 2.4s 1 running both
    ${zoomedMaskedCharaMoveLB};

  @media (min-aspect-ratio: 1/1) and (max-height: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const MaskedYasminC = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: url(${({ src }) => src});
  mask-size: 500%;
  mask-position: 62% 30%;
  mask-repeat: no-repeat;
  background-color: var(--chakra-colors-orange-100);
  animation: 3.3s cubic-bezier(0, 1, 0, 1) 2.3s 1 running both
    ${zoomedMaskedCharaMoveLC};

  @media (min-aspect-ratio: 1/1) and (max-height: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const Momoka = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-size: 500%;
  background-position: 40% 30%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  animation: 3s cubic-bezier(0, 1, 0, 1) 4.4s 1 running both ${zoomedCharaMoveR};

  @media (min-aspect-ratio: 1/1) and (max-height: 800px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 800px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const MaskedMomokaA = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: url(${({ src }) => src});
  mask-size: 500%;
  mask-position: 37% 30%;
  mask-repeat: no-repeat;
  background-color: var(--chakra-colors-blue-300);
  animation: 3.1s cubic-bezier(0, 1, 0, 1) 4.3s 1 running both
    ${zoomedMaskedCharaMoveRA};

  @media (min-aspect-ratio: 1/1) and (max-height: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const MaskedMomokaB = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: url(${({ src }) => src});
  mask-size: 500%;
  mask-position: 34% 30%;
  mask-repeat: no-repeat;
  background-color: var(--chakra-colors-blue-200);
  animation: 3.2s cubic-bezier(0, 1, 0, 1) 4.2s 1 running both
    ${zoomedMaskedCharaMoveRB};

  @media (min-aspect-ratio: 1/1) and (max-height: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const MaskedMomokaC = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mask-image: url(${({ src }) => src});
  mask-size: 500%;
  mask-position: 31% 30%;
  mask-repeat: no-repeat;
  background-color: var(--chakra-colors-blue-100);
  animation: 3.3s cubic-bezier(0, 1, 0, 1) 4.1s 1 running both
    ${zoomedMaskedCharaMoveRC};

  @media (min-aspect-ratio: 1/1) and (max-height: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 800px) {
    mask-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: var(--chakra-colors-black-full);
`;

const ActorWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--chakra-colors-white-full);
  animation: 0.8s linear 1s 1 running both ${fadeInAnimation};
`;

export interface ShowCanvasScene extends SceneProps {}

export const ShowCanvasScene: React.VFC<ShowCanvasScene> = ({
  changeNextScene,
}) => {
  const animationContext = useAnimationContext();
  const animationEnd = useCallback(() => {
    changeNextScene();
  }, [changeNextScene]);

  return (
    <Wrapper>
      <ActorWrapper>
        <FadeInRightBottomRect color="cyan" delay="2s" />
        <FadeInRightBottomRect color="orange" delay="2.25s" />
        <FadeInRightBottomRect color="green" delay="2.5s" />
        <FadeInRightBottomRect color="yellow" delay="2.75s">
          <MaskedYasminC
            src={animationContext.images["yasmin_m.png"]}
            smallSrc={animationContext.images["yasmin_m_s.png"]}
          />
          <MaskedYasminB
            src={animationContext.images["yasmin_m.png"]}
            smallSrc={animationContext.images["yasmin_m_s.png"]}
          />
          <MaskedYasminA
            src={animationContext.images["yasmin_m.png"]}
            smallSrc={animationContext.images["yasmin_m_s.png"]}
          />
          <Yasmin
            src={animationContext.images["yasmin.png"]}
            smallSrc={animationContext.images["yasmin_s.png"]}
          />
        </FadeInRightBottomRect>
        <FadeInLeftBottomRect color="pink" delay="4.7s">
          <MaskedMomokaC
            src={animationContext.images["momoka_m.png"]}
            smallSrc={animationContext.images["momoka_m_s.png"]}
          />
          <MaskedMomokaB
            src={animationContext.images["momoka_m.png"]}
            smallSrc={animationContext.images["momoka_m_s.png"]}
          />
          <MaskedMomokaA
            src={animationContext.images["momoka_m.png"]}
            smallSrc={animationContext.images["momoka_m_s.png"]}
          />
          <Momoka
            src={animationContext.images["momoka.png"]}
            smallSrc={animationContext.images["momoka_s.png"]}
          />
        </FadeInLeftBottomRect>
        <FadeInCenterRect
          color="teal"
          delay="6.7s"
          onAnimationEnd={animationEnd}
        ></FadeInCenterRect>
      </ActorWrapper>
    </Wrapper>
  );
};
