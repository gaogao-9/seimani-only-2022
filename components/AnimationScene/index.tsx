import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SceneName } from "./scene";
import { InitScene } from "./InitScene";
import { LoadingScene } from "./LoadingScene";
import { RotateScene } from "./RotateScene";
import { CallingScene } from "./CallingScene";
import { EndScene } from "./EndScene";
import {
  AnimationContext,
  useAnimationContextValue,
} from "./useAnimationContext";

export const Scene: React.VFC = () => {
  const animationContextValue = useAnimationContextValue();
  const [scene, setScene] = useState<SceneName>("init");
  const changeNextScene = useCallback(() => {
    switch (scene) {
      case "init":
        setScene("end");
        return;
      case "loading":
        setScene("rotate");
        return;
      case "rotate":
        setScene("calling");
        return;
      case "calling":
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
      case "rotate":
        return <RotateScene changeNextScene={changeNextScene} />;
      case "calling":
        return <CallingScene changeNextScene={changeNextScene} />;
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

  return (
    <>
      <AnimationContext.Provider value={animationContextValue}>
        {sceneElement}
      </AnimationContext.Provider>
    </>
  );
};
