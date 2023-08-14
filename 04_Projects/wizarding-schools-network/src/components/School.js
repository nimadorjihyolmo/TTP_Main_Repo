import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useWizardingSchoolContext } from '../context/WizardingSchoolContext';
import { useStudentContext } from '../context/StudentContext';
import { StudentContext } from '../context/StudentContext';
import UpdateWizardingSchoolForm from './UpdateWizardingSchoolForm';
import '../CSS/School.css';
import axios from 'axios';

function SingleWizardingSchool() {
  // const [singleWizardingSchool, setSingleWizardingSchool] = useState(null);
  const { singleWizardingSchool, setSingleWizardingSchool } = useWizardingSchoolContext();
  const { setStudents } = useContext(StudentContext);
  const { allStudents } = useStudentContext();
  const { wizardingSchoolId } = useParams();

  useEffect(() => {
    async function fetchWizardingSchoolDetails() {
      try {
        const { data } = await axios.get(`/api/wizarding-schools/${wizardingSchoolId}`);
        setSingleWizardingSchool(data);
      } catch (error) {
        console.error('Error fetching wizarding school:', error);
      }
    }
    fetchWizardingSchoolDetails();
  }, [wizardingSchoolId]);

  const handleUnenrollStudent = async (studentId) => {
    try {
      await axios.put(`/api/students/${studentId}`, {
        WizardingSchoolId: null, 
      });

      setStudents(prevStudents => prevStudents.map(student =>
        student.id === studentId ? { ...student, WizardingSchoolId: null } : student
      ));
    } catch (error) {
      console.error('Error unenrolling student:', error);
    }
  };

  
  if (!singleWizardingSchool) {
    return <div>Loading......</div>;
  }

  const studentsInSchool = allStudents.filter(student => student.wizardingSchoolId === singleWizardingSchool);

  // const studentsInSchool = singleWizardingSchool.Students;

  console.log(singleWizardingSchool);

  return (
    <div className="single-wizarding-school-container">
      <h2 className="school-name">{singleWizardingSchool.name}</h2>
      <img src={singleWizardingSchool.imageUrl} alt={singleWizardingSchool.name} className="school-image" />
      <p className="school-location">Location: {singleWizardingSchool.location}</p>
      <p className="school-description">Description: {singleWizardingSchool.description}</p>

      <h3 className="students-heading">Students</h3>
      {singleWizardingSchool.Students.length > 0 ? ( 
        <ul className="students-list">
          {singleWizardingSchool.Students.map(student => ( 
            <li key={student.id} className="student-item">
              <Link to={`/students/${student.id}`} className="student-link">{student.firstName}</Link>
              <button onClick={() => handleUnenrollStudent(student.id)} className="unenroll-button">Unenroll</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-students-message">This wizarding school doesn't have any students yet.</p>
      )}

      <div className="update-form-container">
        <h2 className="update-form-heading">School Update Form</h2>
        <UpdateWizardingSchoolForm />
      </div>
      
    </div>
  );
}

export default SingleWizardingSchool;
