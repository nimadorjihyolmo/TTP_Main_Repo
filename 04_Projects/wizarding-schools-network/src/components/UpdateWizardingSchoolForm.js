import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../CSS/UpdateSchool.css';

const UpdateWizardingSchoolForm = () => {
  const { wizardingSchoolId } = useParams();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    async function fetchSchoolDetails() {
      try {
        const { data } = await axios.get(`/api/wizarding-schools/${wizardingSchoolId}`);
        setName(data.name);
        setLocation(data.location);
      } catch (error) {
        console.error('Error fetching wizarding school details:', error);
      }
    }
    fetchSchoolDetails();
  }, [wizardingSchoolId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/wizarding-schools/${wizardingSchoolId}`, {
        name,
        location,
      });

      alert('Wizarding School updated successfully!');
    } catch (error) {
      console.error('Error updating wizarding school:', error);
    }
  };

  return (
    <div className="update-school-form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update School</button>
      </form>
    </div>
  );
};

export default UpdateWizardingSchoolForm;
