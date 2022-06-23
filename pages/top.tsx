import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import {
  TopImageContext,
  useTopImageContext,
  useTopImageContextValue,
} from "~/hooks/useTopImageContext";
import { ResponsiveRect } from "~/components/ResponsiveRect";

const imageSize = {
  w: 3541,
  h: 2508,
} as const;

const Image = styled(Box)<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${imageSize.w}px;
  height: ${imageSize.h}px;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const PageLayout: React.VFC = () => {
  const topImageContext = useTopImageContext();

  return (
    <>
      <Layout>
        {topImageContext.loaded && (
          <ResponsiveRect
            rectWidth="100%"
            rectHeight="calc(100vh - 60px)"
            landscapePositionX="center"
            landscapePositionY={0.3}
            portraitPositionX="center"
            portraitPositionY="bottom"
            imageWidth={imageSize.w}
            imageHeight={imageSize.h}
            minimumHeightThretholdRate={3000 / 1000}
            minimumWidthThretholdRate={600 / 1000}
          >
            <Image src={topImageContext.images["item.png"]} />
            <Image src={topImageContext.images["chara.png"]} />
            <Image src={topImageContext.images["bubble.png"]} />
          </ResponsiveRect>
        )}
      </Layout>
    </>
  );
};

const Page: React.VFC = () => {
  const topImageContextValue = useTopImageContextValue();

  useEffect(() => {
    topImageContextValue.init();

    return () => {
      topImageContextValue.dispose();
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/img/top/chara.png" as="image" />
        <link rel="preload" href="/assets/img/top/item.png" as="image" />
        <link rel="preload" href="/assets/img/top/bubble.png" as="image" />
      </Head>
      <TopImageContext.Provider value={topImageContextValue}>
        <PageLayout />
      </TopImageContext.Provider>
    </>
  );
};

export default Page;
