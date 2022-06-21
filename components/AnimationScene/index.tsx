import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SceneName } from "./scene";
import { InitScene } from "./InitScene";
import { LoadingScene } from "./LoadingScene";
import { ShowCanvasScene } from "./ShowCanvasScene";
import { ZoomedScene } from "./ZoomedScene";
import { EndScene } from "./EndScene";
import {
  AnimationContext,
  useAnimationContextValue,
} from "./useAnimationContext";

export type SceneProps = {
  onSceneEnd: () => void;
};

export const Scene: React.VFC<SceneProps> = ({ onSceneEnd }) => {
  const animationContextValue = useAnimationContextValue();
  const [scene, setScene] = useState<SceneName>("init");
  const changeNextScene = useCallback(() => {
    switch (scene) {
      case "init":
        setScene("loading");
        return;
      case "loading":
        setScene("showCanvas");
        return;
      case "showCanvas":
        setScene("zoomed");
        return;
      case "zoomed":
        setScene("end");
        return;
      case "end":
        return;
      default: {
        const typeCheck: never = scene;
        return typeCheck;
      }
    }
  }, [scene]);

  const sceneElement = useMemo(() => {
    switch (scene) {
      case "init":
        return <InitScene changeNextScene={changeNextScene} />;
      case "loading":
        return <LoadingScene changeNextScene={changeNextScene} />;
      case "showCanvas":
        return <ShowCanvasScene changeNextScene={changeNextScene} />;
      case "zoomed":
        return <ZoomedScene changeNextScene={changeNextScene} />;
      case "end":
        return <EndScene changeNextScene={changeNextScene} />;
      default: {
        const typeCheck: never = scene;
        return typeCheck;
      }
    }
  }, [scene]);

  useEffect(() => {
    animationContextValue.init();

    return () => {
      animationContextValue.dispose();
    };
  }, []);

  const onSceneEndRef = useRef(onSceneEnd);
  onSceneEndRef.current = onSceneEnd;
  useEffect(() => {
    if (scene === "end") {
      onSceneEndRef.current();
    }
  }, [scene]);

  return (
    <>
      <AnimationContext.Provider value={animationContextValue}>
        {sceneElement}
      </AnimationContext.Provider>
    </>
  );
};
