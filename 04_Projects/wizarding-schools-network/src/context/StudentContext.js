import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export const StudentContext = createContext();

export function StudentsProvider({ children }) {
  const [allStudents, setStudents] = useState([]);
  const [singleStudent, setSingleStudent] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <StudentContext.Provider value={{ allStudents, setStudents, singleStudent, setSingleStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentContext(){
  return useContext(StudentContext);
}