import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { DefaultLayout as Layout } from "~/components/layouts/index";
import {
  TopImageContext,
  useTopImageContext,
  useTopImageContextValue,
} from "~/hooks/useTopImageContext";
import {
  ResponsiveImage,
  Image,
  isSmallSize,
} from "~/components/ResponsiveImage";

const isMobileMac = (): boolean => {
  if (typeof window === "undefined") return false;

  const ua = window.navigator.userAgent.toLowerCase();

  return (
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document)
  );
};

const imageSize =
  isMobileMac() || isSmallSize()
    ? ({
        w: 529.5,
        h: 375,
      } as const)
    : ({
        w: 2118,
        h: 1500,
      } as const);

const animationStartDelay = 0.5;

const CharaInAnimation = keyframes`
  0% {
    transform: translateY(${imageSize.h}px) scale(1, 0.7);
  }
  100% {
    transform: translateY(0px) scale(1, 1);
  }
`;

const BubbleInAnimation = keyframes`
  0% {
    transform: scale(0.8, 0);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const BubbleMoveAnimation = keyframes`
  0% {
    transform: skew(0deg, 0deg);
  }
  25% {
    transform: skew(1deg, 1deg);
  }
  50% {
    transform: skew(0deg, 0deg);
  }
  75% {
    transform: skew(-1deg, -1deg);
  }
  100% {
    transform: skew(0deg, 0deg);
  }
`;

const ItemInAnimation = keyframes`
  0% {
    transform: translateY(-${imageSize.h}px);
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const ItemMoveAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-${imageSize.h / 50}px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-${imageSize.h / 50}px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const LogoInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center center;
  transform-style: preserve-3d;
`;

const CharaImageWrapper = styled(ImageWrapper)`
  animation: 0.5s cubic-bezier(0.37, 1.26, 0.76, 1.35) ${animationStartDelay}s 1
    running both ${CharaInAnimation};
`;

const BubbleImageWrapper = styled(ImageWrapper)`
  animation: 0.5s cubic-bezier(0.37, 1.26, 0.76, 1.35)
      ${animationStartDelay + 0.5}s 1 running both ${BubbleInAnimation},
    9s ease ${animationStartDelay + 1.5}s infinite running forwards
      ${BubbleMoveAnimation};
`;

type ItemImageWrapperProps = {
  delay: number;
  reverse: boolean;
};

const ItemImageWrapper = styled(ImageWrapper)<ItemImageWrapperProps>`
  opacity: 0;
  animation: 0.5s cubic-bezier(0.35, 0.98, 0.59, 1.27)
      ${({ delay }) => delay + animationStartDelay + 1}s 1 running both
      ${ItemInAnimation},
    10s ease ${({ delay }) => delay + animationStartDelay + 1.5}s infinite
      ${({ reverse }) => (reverse ? "reverse" : "normal")} forwards running
      ${ItemMoveAnimation};
`;

type LogoWrapperProps = {
  position: "bottom" | "right";
  offsetX: number;
  offsetY: number;
};

const LogoWrapper = styled(ImageWrapper)<LogoWrapperProps>`
  animation: 0.5s ease ${animationStartDelay + 2.5}s 1 running both
    ${LogoInAnimation};
  transform: translate(
    ${({ position, offsetX }) =>
      imageSize.w * ((position === "bottom" ? 0 : 0.33) + offsetX)}px,
    ${({ position, offsetY }) =>
      imageSize.h * ((position === "bottom" ? 0.4 : 0.13) + offsetY)}px
  );
`;

type ImageSetting = {
  clipPath: NonNullable<CSSProperties["clipPath"]>;
  position: "foreground" | "background";
};

const itemSettings: readonly ImageSetting[] = [
  {
    // にんじん
    clipPath: "inset(77.5% 90% 10% 2%)",
    position: "foreground",
  },
  {
    // レモン
    clipPath: "inset(66% 87% 22.5% 5%)",
    position: "background",
  },
  {
    // アイス
    clipPath: "polygon(0% 55%, 0% 44%, 12% 52%, 14% 69%)",
    position: "background",
  },
  {
    // お札
    clipPath: "polygon(0% 39%, 0% 19%, 19% 27%, 19% 39%)",
    position: "foreground",
  },
  {
    // リボン
    clipPath: "polygon(9% 52%, 7% 43%, 19% 37%, 34% 56%)",
    position: "foreground",
  },
  {
    // ラーメン
    clipPath: "inset(0% 78% 77% 10%)",
    position: "foreground",
  },
  {
    // 虹
    clipPath: "inset(82% 67% 1% 13%)",
    position: "foreground",
  },
  {
    // 飴
    clipPath: "inset(0% 61% 85% 21%)",
    position: "foreground",
  },
  {
    // ハート
    clipPath: "inset(8% 50% 81% 40%)",
    position: "foreground",
  },
  {
    // ドーナッツ
    clipPath: "inset(3% 34% 83% 56%)",
    position: "foreground",
  },
  {
    // 流れ星
    clipPath: "inset(20% 13% 59% 76%)",
    position: "background",
  },
  {
    // ショートケーキ
    clipPath: "polygon(81% 4%, 97% 4%, 92% 20%, 81% 19%)",
    position: "foreground",
  },
  {
    // 花
    clipPath: "inset(42% 9% 47% 84%)",
    position: "foreground",
  },
  {
    // ひよこ
    clipPath: "inset(86% 6% 0% 85%)",
    position: "foreground",
  },
  {
    // うさぎ
    clipPath: "inset(26% 5% 61% 86%)",
    position: "foreground",
  },
  {
    // コイン
    clipPath: "inset(52% 3% 34% 90%)",
    position: "foreground",
  },
  {
    // アイス
    clipPath: "inset(66% 0% 18% 89%)",
    position: "foreground",
  },
  {
    // ハート(紫)
    clipPath: "polygon(95% 7%, 100% 7%, 100% 25%, 92% 25%)",
    position: "foreground",
  },
];

const PageLayout: React.VFC = () => {
  const topImageContext = useTopImageContext();
  const [logoPosition, setLogoPosition] = useState<"bottom" | "right">(
    "bottom",
  );
  const [[logoOffsetX, logoOffsetY], setLogoOffset] = useState<
    [number, number]
  >([0, 0]);

  const onResize = useCallback((canvasSize) => {
    const imageRatio = imageSize.w / imageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;
    const positionThrethold = 2.16;
    const rightOffsetThrethold = 3;

    if (canvasRatio <= positionThrethold && canvasRatio >= imageRatio) {
      const offsetRate =
        (canvasRatio - imageRatio) / (positionThrethold - imageRatio);

      setLogoOffset([0, offsetRate * -0.18]);
    }

    if (
      canvasRatio <= rightOffsetThrethold &&
      canvasRatio > positionThrethold
    ) {
      const offsetRate =
        (rightOffsetThrethold - canvasRatio) /
        (rightOffsetThrethold - positionThrethold);

      setLogoOffset([offsetRate * -0.11, offsetRate * 0.09]);
    }

    setLogoPosition(canvasRatio > positionThrethold ? "right" : "bottom");
  }, []);

  return (
    <>
      <Layout>
        {topImageContext.loaded && (
          <>
            <ResponsiveImage
              rectWidth="100%"
              rectHeight={["calc(100vh - 60px)", "calc(100dvh - 60px)"]}
              landscapePositionX="center"
              landscapePositionY={0.3}
              portraitPositionX="center"
              portraitPositionY="bottom"
              imageWidth={imageSize.w}
              imageHeight={imageSize.h}
              minimumHeightThretholdRate={3000 / 1000}
              minimumWidthThretholdRate={600 / 1000}
              onResize={onResize}
            >
              {itemSettings.map((setting, i) =>
                setting.position === "background" ? (
                  <ItemImageWrapper
                    key={i}
                    delay={i / 15}
                    reverse={i % 2 === 0}
                  >
                    <Image
                      src={topImageContext.images["item.png"]}
                      smallSrc={topImageContext.images["item_s.png"]}
                      style={{
                        width: imageSize.w,
                        height: imageSize.h,
                        clipPath: setting.clipPath,
                      }}
                    />
                  </ItemImageWrapper>
                ) : null,
              )}
              <CharaImageWrapper>
                <Image
                  src={topImageContext.images["chara.png"]}
                  smallSrc={topImageContext.images["chara_s.png"]}
                  style={{ width: imageSize.w, height: imageSize.h }}
                />
              </CharaImageWrapper>
              {itemSettings.map((setting, i) =>
                setting.position === "foreground" ? (
                  <ItemImageWrapper
                    key={i}
                    delay={i / 15}
                    reverse={i % 2 === 0}
                  >
                    <Image
                      src={topImageContext.images["item.png"]}
                      smallSrc={topImageContext.images["item_s.png"]}
                      style={{
                        width: imageSize.w,
                        height: imageSize.h,
                        clipPath: setting.clipPath,
                      }}
                    />
                  </ItemImageWrapper>
                ) : null,
              )}
              <BubbleImageWrapper>
                <Image
                  src={topImageContext.images["bubble.png"]}
                  smallSrc={topImageContext.images["bubble_s.png"]}
                  style={{ width: imageSize.w, height: imageSize.h }}
                />
              </BubbleImageWrapper>
              <LogoWrapper
                position={logoPosition}
                offsetX={logoOffsetX}
                offsetY={logoOffsetY}
              >
                <Image
                  src={topImageContext.images["logo.png"]}
                  smallSrc={topImageContext.images["logo_s.png"]}
                  style={{ width: imageSize.w, height: imageSize.h }}
                />
              </LogoWrapper>
            </ResponsiveImage>
          </>
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
      <TopImageContext.Provider value={topImageContextValue}>
        <PageLayout />
      </TopImageContext.Provider>
    </>
  );
};

export default Page;
