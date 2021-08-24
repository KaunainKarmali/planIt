import React, { useEffect, useContext, useState } from "react";
import { Header, Footer, ProjectMain } from "../components";
import { UserContext, ProjectContext } from "../Context";
import useSetUserState from "../services/useSetUserState";
import { extractProject } from "../services/utils";

export default function Project(props) {
  const { user } = useContext(UserContext);
  const { project, setProject } = useContext(ProjectContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useSetUserState();

  const projectId = props.match.params.projectId;

  // set project state each time the page loads or user state changes
  useEffect(() => {
    const extract = extractProject(projectId, user)[0];
    setProject(extract);
  }, [projectId, user]);

  useEffect(() => {
    if (
      project !== undefined &&
      project !== null &&
      typeof project === "object" &&
      Object.keys(project).length > 0 &&
      isLoaded === false
    ) {
      setIsLoaded(true);
    }
  }, [project]);

  if (isLoaded === false) {
    return <p>LOADING...</p>;
  }

  return (
    <>
      <Header landing={false} sideMenu={true} />

      <main>
        <div style={{ marginTop: "65px", textAlign: "center" }}>
          {project && <ProjectMain />}
        </div>
      </main>

      <Footer />
    </>
  );
}
