import RootLayout from "@/components/layout/RootLayout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <Provider store={store}>
        <RootLayout>
          {" "}
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    );
  }
}
