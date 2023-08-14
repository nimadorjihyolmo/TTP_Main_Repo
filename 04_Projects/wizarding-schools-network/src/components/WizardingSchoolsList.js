import React from 'react';
import { Link } from 'react-router-dom';
import { useWizardingSchoolContext } from '../context/WizardingSchoolContext';
import NewWizardingSchoolForm from './NewWizardingSchoolForm'; 
import axios from "axios";
import '../CSS/WizardingSchoolsList.css'; 

export default function WizardingSchoolsList() {
    const { allSchools, setWizardingSchools } = useWizardingSchoolContext();

    const handleDeleteSchool = async (schoolId) => {
        try {
            await axios.delete(`/api/wizarding-schools/${schoolId}`);
            setWizardingSchools(allSchools.filter(school => school.id !== schoolId));
        } catch (error) {
            console.error('Error deleting wizarding school:', error);
        }
    };

    return (
        <div className="wizarding-schools-list-container">
            <h2 className="wizarding-schools-list-title">All Wizarding Schools</h2>

            <ul className="school-list">
                {allSchools.map(school => (
                    <li key={school.id} className="school-item">
                        <Link to={`/wizarding-schools/${school.id}`} className="school-link">
                            <img src={school.imageUrl} alt={school.name} className="school-image"/>
                            <br />
                            {school.name}
                        </Link>
                        <button onClick={() => handleDeleteSchool(school.id)}>X</button>
                    </li>
                ))}
            </ul>
            <br />
            <br />
            <hr />
            <NewWizardingSchoolForm />
        </div>
    );
}
