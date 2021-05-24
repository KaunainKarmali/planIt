import React, { useState } from "react";
import Landing from "./pages/Landing";
import Routes from "./routes/index";
import {
  UserContext,
  BoardContext,
  TimerContext,
  ProjectContext,
} from "./Context";

function App() {
  const [user, setUser] = useState({
    ip: "",
    projects: [],
  });

  const [currentBoard, setCurrentBoard] = useState(null);

  const [activeTimer, setActiveTimer] = useState({
    projectId: "",
    itemId: "",
    itemName: "",
    date: new Date(),
    duration: 0,
  });

  const [project, setProject] = useState({});

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <ProjectContext.Provider value={{ project, setProject }}>
          <BoardContext.Provider value={{ currentBoard, setCurrentBoard }}>
            <TimerContext.Provider value={{ activeTimer, setActiveTimer }}>
              <Routes>
                <Landing />
              </Routes>
            </TimerContext.Provider>
          </BoardContext.Provider>
        </ProjectContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
