import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { SceneProps } from "./scene";
import { useAnimationContext } from "./useAnimationContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

export interface LoadingSceneProps extends SceneProps {}

export const LoadingScene: React.VFC<LoadingSceneProps> = ({
  changeNextScene,
}) => {
  const animationContext = useAnimationContext();

  useEffect(() => {
    if (!animationContext.loaded) return;

    changeNextScene();
  }, [animationContext.loaded]);

  return (
    <Wrapper>
      <Box display="flex" whiteSpace="nowrap" mr={4} mb={3}>
        <Spinner size="md" thickness="4px" speed="0.65s" color="white.full" />
        <Text ml="2" fontSize="md" color="white.full">
          Loading...
        </Text>
      </Box>
    </Wrapper>
  );
};
