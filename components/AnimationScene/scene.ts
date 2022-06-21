export type SceneName = "init" | "loading" | "showCanvas" | "zoomed" | "end";

export interface SceneProps {
  changeNextScene: () => void;
}
