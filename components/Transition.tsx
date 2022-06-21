import { PageTransition } from "next-page-transitions";

export type TransitionProps = {
  path: string;
  children: React.ReactNode;
};

export const Transition: React.VFC<TransitionProps> = ({ path, children }) => (
  <>
    <PageTransition timeout={300} classNames="page-transition" key={path}>
      {children}
    </PageTransition>
    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
      }
      .page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms ease;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity 300ms ease;
      }
    `}</style>
  </>
);
