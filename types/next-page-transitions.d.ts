declare module "next-page-transitions" {
  export type PageTransitionProps = {
    timeout: number;
    classNames: string;
    children: React.ReactNode;
  };
  export const PageTransition: React.VFC<PageTransitionProps>;
}
