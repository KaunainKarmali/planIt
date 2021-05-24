import React, { useEffect, useContext, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TrialMain from "../components/TrialMain/TrialMain";
import { UserContext } from "../Context";
import useSetUserState from "../services/useSetUserState";

function Trial() {
  // custom hook to get or create a user and update user context state
  useSetUserState();

  return (
    <>
      <Header landing={false} sideMenu={true} />

      <main>
        <div style={{ marginTop: "65px", textAlign: "center" }}>
          <TrialMain />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Trial;
