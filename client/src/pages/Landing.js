import React from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

export default function Landing() {
  return (
    <>
      <Header landing={true} sideMenu={false} />

      <main>
        <Main />
      </main>

      <Footer />
    </>
  );
}
