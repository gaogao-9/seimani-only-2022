import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { DefaultLayout as Layout } from "~/components/layouts/index";

const cloudInAnimation = keyframes`
  from { transform: scale(0); }
  to   { transform: scale(1); }
`;

const cloudMoveAnimation = keyframes`
  from { transform: scale(1); }
  25%  { transform: scale(0.9); }
  50%  { transform: scale(1); }
  75%  { transform: scale(1.1); }
  to   { transform: scale(1); }
`;

const star1InAnimation = keyframes`
  from { transform: translateX(100vw) rotate(0deg); }
  to   { transform: translateX(0) rotate(360deg); }
`;

const star2InAnimation = keyframes`
  from { transform: translateX(-100vw) rotate(-360deg); }
  to   { transform: translateX(0) rotate(0deg); }
`;

const starMoveAnimation = keyframes`
  from { transform: rotate(0deg); }
  25%  { transform: rotate(-10deg); }
  50%  { transform: rotate(0deg); }
  75%  { transform: rotate(10deg); }
  to   { transform: rotate(0deg); }
`;

const starRotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const StarStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
`;

const StyledStar01 = styled(Box)`
  ${StarStyle}
  animation: 0.5s ease 2.7s 1 running both ${star1InAnimation},
             7.5s linear 3.2s infinite alternate running forwards ${starMoveAnimation};

  & img:hover {
    animation: 0.5s ease-in 0s reverse 1 running both ${starRotateAnimation};
    transform-origin: 50.3268% 51.4019%;
  }
`;

const StyledStar02 = styled(Box)`
  ${StarStyle}
  animation: 0.5s ease 2.5s 1 running both ${star2InAnimation},
             7s linear 3.2s infinite alternate-reverse running forwards ${starMoveAnimation};

  & img:hover {
    animation: 0.5s ease 0s 1 normal running both ${starRotateAnimation};
    transform-origin: 50.3268% 51.4019%;
  }
`;

const Star01: React.VFC = () => (
  <StyledStar01 bottom="0%" left="47%">
    <Image
      src="/assets/img/top/star01.png"
      alt="star"
      width="25%"
      objectFit="contain"
    />
  </StyledStar01>
);

const Star02: React.VFC = () => (
  <StyledStar02 top="12%" left="-47%">
    <Image
      src="/assets/img/top/star02.png"
      alt="star"
      width="25%"
      objectFit="contain"
    />
  </StyledStar02>
);

const CloudStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
`;

const StyledCloud01 = styled(Box)`
  ${CloudStyle}
  animation: 0.5s cubic-bezier(0.02, 0.79, 0.3, 1.67) 1.5s 1 running both ${cloudInAnimation},
             7.5s linear 3.2s infinite normal running forwards ${cloudMoveAnimation};
`;

const StyledCloud02 = styled(Box)`
  ${CloudStyle}
  animation: 0.5s cubic-bezier(0.02, 0.79, 0.3, 1.67) 2s 1 normal running both ${cloudInAnimation},
             7s linear 3.5s infinite reverse running forwards ${cloudMoveAnimation};
`;

const Cloud01: React.VFC = () => (
  <StyledCloud01 left="-35%" right="auto" bottom="0">
    <Image
      src="/assets/img/top/cloud01.png"
      alt="cloud"
      width="50%"
      objectFit="contain"
    />
  </StyledCloud01>
);

const Cloud02: React.VFC = () => (
  <StyledCloud02 top="0" left="50%">
    <Image
      src="/assets/img/top/cloud02.png"
      alt="cloud"
      width="50%"
      objectFit="contain"
    />
  </StyledCloud02>
);

const Page: React.VFC = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="/assets/img/top/top.png" as="image" />
      </Head>
      <Layout>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="calc(100vh - 60px)"
          maxWidth="100%"
          overflow="hidden"
        >
          <Box position="relative" maxWidth="1200px">
            <Box overflow="hidden">
              <Image
                src="/assets/img/top/top.png"
                alt="main visual"
                objectFit="contain"
                width="100%"
                maxHeight="calc(100vh - 60px)"
              />
            </Box>
            <Star02 />
            <Star01 />
            <Cloud01 />
            <Cloud02 />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Page;
