import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { AnimationLayout as Layout } from "~/components/layouts/index";
import { Scene } from "~/components/AnimationScene/index";

const Page: React.VFC = () => {
  const router = useRouter();
  const [isAnimationEnded, setIsAnimationEnded] = useState(false);
  const onSceneEnd = useCallback(() => {
    setIsAnimationEnded(true);
  }, []);
  const onLayoutAnimationEnd = useCallback((e) => {
    router.push("/top");
  }, []);

  return (
    <Layout
      isAnimationEnded={isAnimationEnded}
      onLayoutAnimationEnd={onLayoutAnimationEnd}
    >
      <Scene onSceneEnd={onSceneEnd} />
    </Layout>
  );
};

export default Page;
