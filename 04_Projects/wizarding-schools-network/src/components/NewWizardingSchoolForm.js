import React, { useState } from 'react';
import axios from 'axios';
import { useWizardingSchoolContext } from '../context/WizardingSchoolContext';
import '../CSS/NewSchoolForm.css'; 

export default function NewWizardingSchoolForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const { wizardingSchools, setWizardingSchools } = useWizardingSchoolContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/wizarding-schools', {
        name,
        location,
        description,
      });
      alert('New Wizard School added successfully!');

      const newSchool = response.data;
      setWizardingSchools([...wizardingSchools, newSchool]);

      // Clear form inputs after successful submission
      setName('');
      setLocation('');
      setDescription('');
    } catch (error) {
      console.error('Error adding new wizarding school:', error);
    }
  };

  return (
    <div className="new-school-form-container">
      <h2 className="form-title">Add New Wizarding School</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-input" />
        </label>
        <br />
        <label className="form-label">
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-input" />
        </label>
        <br />
        <button type="submit" className="form-button">Add School</button>
      </form>
    </div>
  );
}
