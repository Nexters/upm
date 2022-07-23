import type { NextPage } from "next";
import Head from "next/head";

import Navigation from "../components/common/Navigation";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import EditingList from "../components/editingList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Editing WireFrame</title>
        <meta name="description" content="OPM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header />
      <EditingList />
      <Footer />
    </>
  );
};

export default Home;
