import React from "react";
import { AnimationLayout as Layout } from "~/components/layouts/index";
import { Scene } from "~/components/AnimationScene/index";

const Page: React.VFC = () => {
  return (
    <Layout>
      <Scene />
    </Layout>
  );
};

export default Page;
