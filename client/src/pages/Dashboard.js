import React, { useEffect, useContext, useState } from "react";
import { Header, Footer, ProjectMain, DashboardMain } from "../components";
import { UserContext, ProjectContext } from "../Context";
import useSetUserState from "../services/useSetUserState";
import { extractProject } from "../services/utils";

export default function Dashboard(props) {
  const { user, setUser } = useContext(UserContext);
  const { project, setProject } = useContext(ProjectContext);
  const [isLoaded, setIsLoaded] = useState(false);

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
