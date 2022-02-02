import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { Transition } from "~/components/Transition";
import { Head } from "~/components/Head";
import { theme } from "~/foundation/theme";
import { GlobalStyle } from "~/foundation/GlobalStyle";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      <ChakraProvider theme={theme}>
        <Transition>
          <>
            <CSSReset key={`${router.pathname}-css-reset`} />
            <GlobalStyle key={`${router.pathname}-global-style`} />
            <Head key={`${router.pathname}-head`} />
            <Component {...pageProps} key={router.pathname} />
          </>
        </Transition>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
