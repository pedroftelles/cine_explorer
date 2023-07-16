import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/logo.ico" />
        <title>CineExplorer</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}
