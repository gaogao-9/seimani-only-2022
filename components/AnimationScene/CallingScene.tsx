import React, { useCallback, useRef } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SceneProps } from "./scene";

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const TextWrapper = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 1;
  background-color: var(--chakra-colors-white-full);
  animation: 1s linear 8.2s 1 reverse forwards running ${fadeInAnimation};
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

  & > * {
    position: absolute;
  }

  & > [data-actor="text_1"],
  & > [data-actor="text_2"] {
    left: 50%;
    width: 100%;
    color: var(--chakra-colors-white-full);
    text-align: center;
    font-family: "Kiwi Maru", serif;
    font-size: min(12vw, 12vh);
    transform: translate(-50%, -50%);
    text-shadow: 0 0 10px #ff0ecb;
    opacity: 0;

    &[data-actor="text_1"] {
      top: 40%;
      animation: 0.8s linear 0.5s 1 normal forwards running ${fadeInAnimation},
        0.8s linear 3s 1 reverse forwards running ${fadeInAnimation};
    }

    &[data-actor="text_2"] {
      top: 60%;
      animation: 0.8s linear 4.5s 1 normal forwards running ${fadeInAnimation},
        0.8s linear 7s 1 reverse forwards running ${fadeInAnimation};
    }
  }
`;

export interface CallingSceneProps extends SceneProps {}

export const CallingScene: React.VFC<CallingSceneProps> = ({
  changeNextScene,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const animationEnd: React.AnimationEventHandler<HTMLDivElement> = useCallback(
    (eve) => {
      if (eve.target !== wrapperRef.current) return;

      changeNextScene();
    },
    [changeNextScene],
  );

  return (
    <Wrapper ref={wrapperRef} onAnimationEnd={animationEnd}>
      <ActorWrapper>
        <TransformWrapper>
          <TextWrapper data-actor="text_1">おかえり</TextWrapper>
          <TextWrapper data-actor="text_2">ただいま</TextWrapper>
        </TransformWrapper>
      </ActorWrapper>
    </Wrapper>
  );
};
