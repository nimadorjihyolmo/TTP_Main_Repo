import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStudentContext } from '../context/StudentContext';
import { useWizardingSchoolContext } from '../context/WizardingSchoolContext';
import UpdateStudentForm from './UpdateStudentForm'; 
import '../CSS/Student.css';
import axios from 'axios';

function SingleStudent() {
  const { singleStudent, setSingleStudent } = useStudentContext();
  const { allSchools } = useWizardingSchoolContext();
  const { studentId } = useParams();

  useEffect(() => {
    async function fetchStudentDetails() {
      try {
        const { data } = await axios.get(`/api/students/${studentId}`);
        setSingleStudent(data);
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    }
    fetchStudentDetails();
  }, [studentId]);

  if (!singleStudent) {
    return <div>Loading......</div>;
  }

  const studentSchool = allSchools.find(school => school.id === singleStudent.SchoolId);

  console.log(singleStudent);

  return (
    <div className="single-student">
      <h2>{singleStudent.firstName} {singleStudent.lastName}</h2>
      <img src={singleStudent.imageUrl} alt={singleStudent.firstName} className="student-image"/>
      <p>Email: {singleStudent.email}</p>
      <p>Magical Ability Score: {singleStudent.magicalAbilityScore}</p>

      <h3>Wizarding School</h3>
      {singleStudent.WizardingSchool ? (
        <Link to={`/wizarding-schools/${singleStudent.WizardingSchool.id}`} className="school-link">{singleStudent.WizardingSchool.name}</Link>
      ) : (
        <p>This student is not currently enrolled in any wizarding school.</p>
      )}
      
      <div className="student-update-form">
        <h2>Student Update Form</h2>
        <UpdateStudentForm />
      </div>
    </div>
  );
}

export default SingleStudent;

