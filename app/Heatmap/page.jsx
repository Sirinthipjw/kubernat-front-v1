// pages/index.js
import FootShape from "@/components/FootHeat";
import Head from "next/head";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Foot Shape with D3.js</title>
        <meta name="description" content="Drawing a foot shape with D3.js in a Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center h-screen">
        <FootShape />
      </main>
    </div>
  );
}
