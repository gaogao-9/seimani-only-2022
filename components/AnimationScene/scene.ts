export type SceneName = "init" | "loading" | "rotate" | "calling" | "end";

export interface SceneProps {
  changeNextScene: () => void;
}
