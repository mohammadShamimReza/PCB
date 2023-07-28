import RootLayout from "@/components/layout/RootLayout";
import { Inter } from "next/font/google";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPageWithLayout = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl">
      <h1>this is me</h1>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
