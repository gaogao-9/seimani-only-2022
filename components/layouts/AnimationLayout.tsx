import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--chakra-colors-black-full);
`;

const Contents = styled.div`
  width: min(100vw, 100vh);
  height: min(100vw, 100vh);
  overflow: hidden;
`;

export interface AnimationLayoutProps {
  children: React.ReactNode;
}

export const AnimationLayout: React.VFC<AnimationLayoutProps> = ({
  children,
  ...props
}) => (
  <Wrapper {...props}>
    <Contents>{children}</Contents>
  </Wrapper>
);
