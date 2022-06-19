import React from "react";
import styled from "@emotion/styled";

const SkyBackgroundWrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 60px);
  background-attachment: fixed;
  background-color: var(--chakra-colors-skin-aqua);
`;

const YellowCircleWrapper = styled.div`
  position: absolute;
  top: auto;
  left: auto;
  right: auto;
  bottom: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
`;

const YellowCircle = styled.div`
  position: absolute;
  top: auto;
  left: 50%;
  right: auto;
  bottom: 0;
  width: 150vw;
  height: calc(100vh - 60px);
  border-radius: 50%;
  background: var(--chakra-colors-skin-orange);
  pointer-events: none;
  transform: translate(-50%, 50%);
`;

const Contents = styled.div`
  position: relative;
  z-index: 1;
`;

export type SkyBackgroundProps = {
  children: React.ReactNode;
};

export const SkyBackground: React.VFC<SkyBackgroundProps> = ({ children }) => (
  <SkyBackgroundWrapper>
    <YellowCircleWrapper>
      <YellowCircle />
    </YellowCircleWrapper>
    <Contents>{children}</Contents>
  </SkyBackgroundWrapper>
);
