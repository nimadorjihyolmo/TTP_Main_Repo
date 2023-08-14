import React, { useState } from 'react';
import axios from 'axios';
import { useStudentContext } from '../context/StudentContext';
import '../CSS/NewStudentForm.css';

export default function NewStudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { students, setStudents } = useStudentContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/students', {
        firstName,
        lastName,
        email,
      });
      alert('New Student added successfully!');

      const newStudent = response.data;
      setStudents([...students, newStudent]);

      // Clear form inputs after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
    } catch (error) {
      console.error('Error adding new student:', error);
    }
  };

  return (
    <div className="new-student-form">
      <h2>Add New Student</h2>
      <br />
      <form className="student-form" onSubmit={handleSubmit}>
        <label className="student-form-label">
          First Name: 
          <input
            className="student-form-input"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </label>
        <br />
        <label className="student-form-label">
          Last Name: 
          <input
            className="student-form-input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label className="student-form-label">
          Email: 
          <input
            className="student-form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button className="student-form-button" type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}
