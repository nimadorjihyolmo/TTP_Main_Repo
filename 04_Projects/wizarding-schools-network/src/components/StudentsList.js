import React from 'react';
import { Link } from 'react-router-dom'; 
import { useStudentContext } from '../context/StudentContext';
import NewStudentForm from './NewStudentForm';
import '../CSS/StudentsList.css';
import axios from 'axios';

export default function StudentsList() {
  const { allStudents, setStudents } = useStudentContext();
  
  const handleDeleteStudent = async (studentId) => {
    try {
      await axios.delete(`/api/students/${studentId}`);
      setStudents(allStudents.filter(student => student.id !== studentId));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className="students-list">
    <h2 className="students-list-heading">All Students</h2>
    <br />
    <ul className="students-list-ul">
      {allStudents.map((student) => (
        <li className="students-list-item" key={student.id}>
          <Link className="students-list-link" to={`/students/${student.id}`}>
            {student.firstName} {student.lastName}
          </Link>
          <br />
          <button
            className="students-list-delete-button"
            onClick={() => handleDeleteStudent(student.id)}
          >
            x
          </button>
        </li>
      ))}
    </ul>

    <NewStudentForm />
  </div>
  );
}
