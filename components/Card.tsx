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
        borderBottomColor="gray.800"
      >
        <Text
          fontSize="4xl"
          fontFamily={`"Noto Sans JP", sans-serif`}
          fontWeight="300"
          color="orange.700"
        >
          {title}
        </Text>
      </Box>
      <Text
        as="div"
        fontSize="lg"
        fontFamily={`"Noto Sans JP", sans-serif`}
        fontWeight="200"
        color="blue.800"
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
          color="pink.600"
        >
          {title}
        </Text>
      </Box>
      <Box marginX={4}>
        <Text
          as="div"
          fontSize="lg"
          fontFamily={`"Noto Sans JP", sans-serif`}
          fontWeight="200"
          color="blue.800"
          lineHeight={1.75}
        >
          {children}
        </Text>
      </Box>
    </Box>
  );
};

Card.Section = CardSection;
