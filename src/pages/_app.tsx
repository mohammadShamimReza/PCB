import RootLayout from "@/components/layout/RootLayout";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        {" "}
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
