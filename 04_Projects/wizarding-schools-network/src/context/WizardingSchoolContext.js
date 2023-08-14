import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WizardingSchoolContext = createContext();

export function WizardingSchoolsProvider({ children }) {
  const [allSchools, setWizardingSchools] = useState([]);
  const [singleWizardingSchool, setSingleWizardingSchool] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/wizarding-schools');
        setWizardingSchools(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <WizardingSchoolContext.Provider value={{ allSchools, setWizardingSchools, singleWizardingSchool, setSingleWizardingSchool }}>
      {children}
    </WizardingSchoolContext.Provider>
  );
}


export function useWizardingSchoolContext(){
  return useContext(WizardingSchoolContext);
}
