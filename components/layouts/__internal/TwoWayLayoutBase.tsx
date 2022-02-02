import React from "react";
import styled from "@emotion/styled";
import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Footer } from "~/components/Footer";
import { RoutingMenu, RoutingMenuDrawer } from "~/components/RoutingMenu/index";

const Wrapper = styled.div`
  display: grid;
  grid-template: "contents menu  " 1fr / 1fr auto;
  width: 100%;
  height: 100vh;
`;

interface GridItemProps {
  gridArea: string;
  overflow?: "visible" | "hidden" | "auto";
}

const GridItem = styled.div<GridItemProps>`
  grid-area: ${({ gridArea }) => gridArea};
  ${({ overflow }) => overflow && `overflow: ${overflow};`};
  overflow-x: hidden;
`;

const ContentsWrapper = styled.div`
  display: grid;
  grid-template:
    "contents" 1fr
    "footer" auto / 1fr;
  height: 100%;
`;

export interface TwoWayLayoutBaseProps {
  children: React.ReactNode;
}

export const TwoWayLayoutBase: React.VFC<TwoWayLayoutBaseProps> = ({
  children,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Wrapper {...props}>
        <GridItem gridArea="contents" overflow="hidden">
          <ContentsWrapper>
            <GridItem gridArea="contents" overflow="auto">
              {children}
            </GridItem>
            <GridItem
              gridArea="footer"
              style={{ zIndex: 1, boxShadow: "0px -5px 20px 12px white" }}
            >
              <Footer />
            </GridItem>
          </ContentsWrapper>
        </GridItem>
        <GridItem gridArea="menu" overflow="hidden">
          <Box
            display={{ base: "none", lg: "block" }}
            w="272px"
            h="100%"
            py={10}
            overflowY="auto"
          >
            <RoutingMenu />
          </Box>
          <Box display={{ base: "block", lg: "none" }}>
            <RoutingMenuDrawer size="xs" isOpen={isOpen} onClose={onClose}>
              <RoutingMenu />
            </RoutingMenuDrawer>
          </Box>
        </GridItem>
      </Wrapper>
      <Box
        display={{ base: "block", lg: "none" }}
        position="absolute"
        top="5px"
        right="20px"
      >
        <IconButton
          aria-label="ページ内リンクメニューを表示"
          icon={<HamburgerIcon color="gray.700" />}
          onClick={onOpen}
        />
      </Box>
    </>
  );
};
