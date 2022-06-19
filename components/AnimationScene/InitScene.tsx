import { useEffect } from "react";
import { SceneProps } from "./scene";

export interface InitSceneProps extends SceneProps {}

export const InitScene: React.VFC<InitSceneProps> = ({ changeNextScene }) => {
  useEffect(() => {
    changeNextScene();
  }, []);

  return <></>;
};
