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

const imageSize = {
  w: 3541,
  h: 2508,
} as const;

const thresholdRatio = {
  min: 600 / 1000,
  max: 3000 / 1000,
} as const;

const offsetRatio = {
  landscape: 1,
  portrait: 0.3,
};

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

const ImageWrapper = styled(Box)<
  {
    scaleX: number;
    scaleY: number;
  } & (
    | {
        translateX: number;
      }
    | { translateY: number }
  )
>`
  width: 100%;
  height: 100%;
  transform: translate(
      ${({ translateX = 0 }) => translateX}px,
      ${({ translateY = 0 }) => translateY}px
    )
    scale(${({ scaleX }) => scaleX}, ${({ scaleY }) => scaleY});
  transform-origin: left top;
`;

const PageLayout: React.VFC = () => {
  const topImageContext = useTopImageContext();

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });

  useEffect(() => {
    if (imageContainerRef.current === null) return;

    const target = imageContainerRef.current;

    const resizeObserver = new ResizeObserver((entry) => {
      const [{ contentRect }] = entry;
      setCanvasSize({ w: contentRect.width, h: contentRect.height });
    });

    resizeObserver.observe(target);

    return () => {
      resizeObserver.unobserve(target);
    };
  }, [imageContainerRef.current]);

  const scale = useMemo(() => {
    const imageRatio = imageSize.w / imageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;

    if (canvasRatio > imageRatio) {
      // 横長
      return {
        x:
          (canvasSize.h * Math.min(canvasRatio, thresholdRatio.max)) /
          imageRatio /
          imageSize.h,
        y:
          (canvasSize.h * Math.min(canvasRatio, thresholdRatio.max)) /
          imageSize.w,
      };
    } else {
      // 縦長
      return {
        x:
          canvasSize.w /
          Math.max(canvasRatio, thresholdRatio.min) /
          imageSize.h,
        y:
          ((canvasSize.w / Math.max(canvasRatio, thresholdRatio.min)) *
            imageRatio) /
          imageSize.w,
      };
    }
  }, [canvasSize.w, canvasSize.h]);

  const translate = useMemo(() => {
    const imageRatio = imageSize.w / imageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;

    if (canvasRatio > imageRatio) {
      // 横長
      return {
        x:
          (canvasSize.w / 2) *
          (1 - Math.min(canvasRatio, thresholdRatio.max) / canvasRatio),
        y:
          canvasSize.h *
          (1 - Math.min(canvasRatio, thresholdRatio.max) / imageRatio) *
          offsetRatio.portrait,
      };
    } else {
      // 縦長
      return {
        x:
          (canvasSize.w / 2) *
          (1 - imageRatio / Math.max(canvasRatio, thresholdRatio.min)) *
          offsetRatio.landscape,
        y:
          canvasSize.h *
          (1 - canvasRatio / Math.max(canvasRatio, thresholdRatio.min)),
      };
    }
  }, [canvasSize.w, canvasSize.h]);

  return (
    <>
      <Layout>
        <Box
          ref={imageContainerRef}
          position="relative"
          height="calc(100vh - 60px)"
          width="100%"
          overflow="hidden"
        >
          {topImageContext.loaded && (
            <>
              <ImageWrapper
                scaleX={scale.x}
                scaleY={scale.y}
                translateX={translate.x}
                translateY={translate.y}
              >
                <Image src={topImageContext.images["item.png"]} />
                <Image src={topImageContext.images["chara.png"]} />
                <Image src={topImageContext.images["bubble.png"]} />
              </ImageWrapper>
            </>
          )}
        </Box>
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
