import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../CSS/UpdateStudent.css';
import axios from 'axios';

export default function UpdateStudentForm() {
  const { studentId } = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [magicalAbilityScore, setMagicalAbilityScore] = useState('');

  useEffect(() => {
    async function fetchStudentDetails() {
      const { data } = await axios.get(`/api/students/${studentId}`);
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setMagicalAbilityScore(data.magicalAbilityScore);
    }
    fetchStudentDetails();
  }, [studentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/students/${studentId}`, {
        firstName,
        lastName,
        email,
        magicalAbilityScore,
      });

      alert('Student updated successfully!');
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className="update-student-form">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Magical Ability Score:
          <input type="number" value={magicalAbilityScore} onChange={(e) => setMagicalAbilityScore(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}
