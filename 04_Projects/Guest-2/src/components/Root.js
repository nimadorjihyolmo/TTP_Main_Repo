import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import School from "./sections/School";
import Student from "./sections/Student";
import AllSchools from "./sections/AllSchools";
import AllStudents from "./sections/AllStudents";
import Navbar from "./navbar";
import { SchoolProvider } from "./Context/SchoolContext";
import { StudentProvider } from "./Context/StudentContext";

const Root = () => {
  return (
    <div className="navigation">
      <Navbar />
      <SchoolProvider>
        <StudentProvider>
         <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Wizarding-schools/:id" element={<School />} />
          <Route path="/Students/:id" element={<Student />}/>
          <Route path="/Wizarding-schools" element={<AllSchools />} />
          <Route path="/Students" element={<AllStudents />} />
        </Routes>
       </StudentProvider>
      </SchoolProvider>
    </div>
  );
};

export default Root;
