import React from "react";
import styled from "@emotion/styled";
import { Background } from "./__internal/Background";
import { Footer } from "~/components/Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
`;

export interface SingleLayoutProps {
  children: React.ReactNode;
}

export const SingleLayout: React.VFC<SingleLayoutProps> = ({
  children,
  ...props
}) => (
  <Wrapper {...props}>
    <Background>
      {children}
      <Footer />
    </Background>
  </Wrapper>
);
