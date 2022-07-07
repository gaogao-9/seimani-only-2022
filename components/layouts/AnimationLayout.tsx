import React, { useCallback, useRef } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  background-color: var(--chakra-colors-black-full);

  &[data-animation-end="true"] {
    background-color: var(--chakra-colors-white-full);
    transition: background-color 1.5s linear;
  }
`;

const Contents = styled.div`
  width: min(100vw, 100vh);
  width: min(100dvw, 100dvh);
  height: min(100vw, 100vh);
  height: min(100dvw, 100dvh);
  overflow: hidden;
  pointer-events: none;
  perspective: 200vmin;
`;

export interface AnimationLayoutProps {
  isAnimationEnded: boolean;
  onLayoutAnimationEnd: () => void;
  children: React.ReactNode;
}

export const AnimationLayout: React.VFC<AnimationLayoutProps> = ({
  isAnimationEnded,
  children,
  onLayoutAnimationEnd,
  ...props
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const onTransitionEnd: React.TransitionEventHandler<HTMLDivElement> =
    useCallback(
      (eve) => {
        if (eve.target !== wrapperRef.current) return;

        onLayoutAnimationEnd();
      },
      [onLayoutAnimationEnd],
    );
  return (
    <Wrapper
      {...props}
      ref={wrapperRef}
      data-animation-end={isAnimationEnded ? true : undefined}
      onTransitionEnd={onTransitionEnd}
    >
      <Contents>{children}</Contents>
    </Wrapper>
  );
};
