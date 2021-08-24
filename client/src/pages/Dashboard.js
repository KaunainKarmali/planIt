import React, { useContext } from "react";
import { Header, Footer, DashboardMain } from "../components";
import { UserContext } from "../Context";
import useSetUserState from "../services/useSetUserState";

export default function Dashboard(props) {
  const { user } = useContext(UserContext);

  useSetUserState();

  return (
    <>
      <Header landing={false} sideMenu={true} />

      <main>
        <div style={{ marginTop: "65px", textAlign: "center" }}>
          {user && <DashboardMain />}
        </div>
      </main>

      <Footer />
    </>
  );
}
