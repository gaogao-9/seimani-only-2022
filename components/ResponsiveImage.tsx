import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: left top;
`;

const computePositionXRate = (positionX: PositionX) => {
  switch (positionX) {
    case "left":
      return 0;
    case "center":
      return 0.5;
    case "right":
      return 1;
    default:
      return positionX;
  }
};

const computePositionYRate = (positionY: PositionY) => {
  switch (positionY) {
    case "top":
      return 0;
    case "center":
      return 0.5;
    case "bottom":
      return 1;
    default:
      return positionY;
  }
};

type PositionX = "left" | "center" | "right" | number;
type PositionY = "top" | "center" | "bottom" | number;

export type ResponsiveImageProps = {
  rectWidth: NonNullable<CSSProperties["width"]>;
  rectHeight: NonNullable<CSSProperties["height"]>;
  imageWidth: number;
  imageHeight: number;
  minimumHeightThretholdRate: number;
  minimumWidthThretholdRate: number;
  landscapePositionX: PositionX;
  landscapePositionY: PositionY;
  portraitPositionX: PositionX;
  portraitPositionY: PositionY;
  children?: React.ReactNode;
};

export const ResponsiveImage: React.VFC<ResponsiveImageProps> = ({
  rectWidth,
  rectHeight,
  imageWidth,
  imageHeight,
  minimumHeightThretholdRate,
  minimumWidthThretholdRate,
  landscapePositionX,
  landscapePositionY,
  portraitPositionX,
  portraitPositionY,
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });
  const imageSize = useMemo(
    () => ({ w: imageWidth, h: imageHeight }),
    [imageWidth, imageHeight],
  );

  useEffect(() => {
    if (wrapperRef.current === null) return;

    const target = wrapperRef.current;

    const resizeObserver = new ResizeObserver((entry) => {
      const [{ contentRect }] = entry;
      setCanvasSize({ w: contentRect.width, h: contentRect.height });
    });

    const contentRect = target.getBoundingClientRect();
    setCanvasSize({ w: contentRect.width, h: contentRect.height });

    resizeObserver.observe(target);

    return () => {
      resizeObserver.unobserve(target);
    };
  }, [wrapperRef.current]);

  const scale = useMemo(() => {
    const imageRatio = imageSize.w / imageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;

    if (canvasRatio > imageRatio) {
      // 横長
      return {
        x:
          (canvasSize.h * Math.min(canvasRatio, minimumHeightThretholdRate)) /
          imageRatio /
          imageSize.h,
        y:
          (canvasSize.h * Math.min(canvasRatio, minimumHeightThretholdRate)) /
          imageSize.w,
      };
    } else {
      // 縦長
      return {
        x:
          canvasSize.w /
          Math.max(canvasRatio, minimumWidthThretholdRate) /
          imageSize.h,
        y:
          ((canvasSize.w / Math.max(canvasRatio, minimumWidthThretholdRate)) *
            imageRatio) /
          imageSize.w,
      };
    }
  }, [canvasSize.w, canvasSize.h]);

  const landscapeRateX = useMemo(
    () => computePositionXRate(landscapePositionX),
    [landscapePositionX],
  );
  const landscapeRateY = useMemo(
    () => computePositionYRate(landscapePositionY),
    [landscapePositionY],
  );
  const portraitRateX = useMemo(
    () => computePositionXRate(portraitPositionX),
    [portraitPositionX],
  );
  const portraitRateY = useMemo(
    () => computePositionYRate(portraitPositionY),
    [portraitPositionY],
  );

  const translate = useMemo(() => {
    const imageRatio = imageSize.w / imageSize.h;
    const canvasRatio = canvasSize.w / canvasSize.h;

    if (canvasRatio > imageRatio) {
      // 横長
      return {
        x:
          canvasSize.w *
          (1 -
            Math.min(canvasRatio, minimumHeightThretholdRate) / canvasRatio) *
          landscapeRateX,
        y:
          canvasSize.h *
          (1 - Math.min(canvasRatio, minimumHeightThretholdRate) / imageRatio) *
          landscapeRateY,
      };
    } else {
      // 縦長
      return {
        x:
          canvasSize.w *
          (1 - imageRatio / Math.max(canvasRatio, minimumWidthThretholdRate)) *
          portraitRateX,
        y:
          canvasSize.h *
          (1 - canvasRatio / Math.max(canvasRatio, minimumWidthThretholdRate)) *
          portraitRateY,
      };
    }
  }, [canvasSize.w, canvasSize.h]);

  return (
    <Wrapper
      ref={wrapperRef}
      style={{
        width: rectWidth,
        height: rectHeight,
      }}
    >
      <ImageContainer
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale.x}, ${scale.y})`,
        }}
      >
        {children}
      </ImageContainer>
    </Wrapper>
  );
};

export const Image = styled.div<{ src: string; smallSrc: string }>`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  @media (min-aspect-ratio: 1/1) and (max-height: 720px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
  @media (max-aspect-ratio: 1/1) and (max-width: 720px) {
    background-image: url(${({ smallSrc }) => `${smallSrc}`});
  }
`;
