import React from "react";
import { TwoWayLayoutBase } from "./__internal/TwoWayLayoutBase";
import { SkyBackground } from "./__internal/SkyBackground";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.VFC<DefaultLayoutProps> = ({
  children,
  ...props
}) => (
  <TwoWayLayoutBase {...props}>
    <SkyBackground>{children}</SkyBackground>
  </TwoWayLayoutBase>
);
