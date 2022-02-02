import React from "react";
import { Box, Text } from "@chakra-ui/react";

export interface Card extends React.VFC<CardProps> {
  Section: React.VFC<CardSectionProps>;
}

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export interface CardSectionProps {
  title: string;
  children: React.ReactNode;
}

export const Card: Card = ({ title, children, ...props }) => {
  return (
    <Box
      marginY={12}
      marginX={8}
      paddingY={8}
      paddingX={7}
      width="100%"
      borderRadius="2xl"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="facebook.200"
      bgColor="white.full"
      {...props}
    >
      <Box
        marginBottom={8}
        borderBottomStyle="solid"
        borderBottomWidth="1px"
        borderBottomColor="gray.700"
      >
        <Text
          fontSize="4xl"
          fontFamily={`"Noto Sans JP", sans-serif`}
          fontWeight="300"
          color="gray.700"
        >
          {title}
        </Text>
      </Box>
      <Text
        as="div"
        fontSize="lg"
        fontFamily={`"Noto Sans JP", sans-serif`}
        fontWeight="100"
        color="gray.700"
      >
        {children}
      </Text>
    </Box>
  );
};

const CardSection: React.VFC<CardProps> = ({ title, children, ...props }) => {
  return (
    <Box marginTop={6} {...props}>
      <Box marginBottom={3}>
        <Text
          fontSize="2xl"
          fontFamily={`"Noto Sans JP", sans-serif`}
          fontWeight="300"
          color="gray.700"
        >
          {title}
        </Text>
      </Box>
      <Box marginX={4}>
        <Text
          as="div"
          fontSize="lg"
          fontFamily={`"Noto Sans JP", sans-serif`}
          fontWeight="100"
          color="gray.700"
        >
          {children}
        </Text>
      </Box>
    </Box>
  );
};

Card.Section = CardSection;
