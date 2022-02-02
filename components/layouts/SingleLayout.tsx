import React from "react";
import styled from "@emotion/styled";
import { SkyBackground } from "./__internal/SkyBackground";
import { Footer } from "~/components/Footer";

const Wrapper = styled.div`
  min-height: 100vh;
`;

export interface SingleLayoutProps {
  children: React.ReactNode;
}

export const SingleLayout: React.VFC<SingleLayoutProps> = ({
  children,
  ...props
}) => (
  <Wrapper {...props}>
    <SkyBackground>
      {children}
      <Footer />
    </SkyBackground>
  </Wrapper>
);
