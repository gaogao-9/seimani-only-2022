import { useRouter } from "next/router";
import { useEffect } from "react";
import { SceneProps } from "./scene";

export interface EndSceneProps extends SceneProps {}

export const EndScene: React.VFC<EndSceneProps> = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/top");
  }, []);

  return <></>;
};
