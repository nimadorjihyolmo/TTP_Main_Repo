import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./components/Root";
import { WizardingSchoolsProvider } from "./context/WizardingSchoolContext";
import { StudentsProvider } from "./context/StudentContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <WizardingSchoolsProvider>
        <StudentsProvider>
          <Root />
        </StudentsProvider>
      </WizardingSchoolsProvider>
    </Router>
  </React.StrictMode>
);
