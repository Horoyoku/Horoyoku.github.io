import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
// Import pages down here
import AboutUs from "./pages/AboutMe";
import ProjectDetail from "./pages/ProjectDetail";
import MyProjects from "./pages/MyProjects";
// Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch 
          location={location} 
          key={location.pathname}
        >
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/projects" exact>
            <MyProjects />
          </Route>
          <Route path="/project/:id" exact>
            <ProjectDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
