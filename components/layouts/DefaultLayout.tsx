import React from "react";
import { TwoWayLayoutBase } from "./__internal/TwoWayLayoutBase";
import { Background } from "./__internal/Background";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({
  children,
  ...props
}) => (
  <TwoWayLayoutBase {...props}>
    <Background>{children}</Background>
  </TwoWayLayoutBase>
);
