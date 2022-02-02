import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/react";

export interface RoutingMenuDrawerProps extends DrawerProps {
  children: React.ReactNode;
}

export const RoutingMenuDrawer: React.VFC<RoutingMenuDrawerProps> = ({
  children,
  ...props
}) => {
  return (
    <Drawer {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader />
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
