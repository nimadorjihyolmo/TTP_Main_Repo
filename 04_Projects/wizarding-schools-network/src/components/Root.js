import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import { WizardingSchoolsProvider } from "../context/WizardingSchoolContext";
import { StudentsProvider } from "../context/StudentContext";
import School from "./School";
import Student from "./Student";
import StudentsList from "./StudentsList";
import WizardingSchoolsList from "./WizardingSchoolsList";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div className="navigation">
      <Navbar />
      <br />
      <WizardingSchoolsProvider>
        <StudentsProvider>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/wizarding-schools" element={<WizardingSchoolsList />}/>
            <Route path="/wizarding-schools/:wizardingSchoolId" element={<School />} />
            <Route path="/students" element={<StudentsList />}/>
            <Route path="/students/:studentId" element={<Student />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </StudentsProvider>
      </WizardingSchoolsProvider>
    </div>
  );
};

export default Root;
