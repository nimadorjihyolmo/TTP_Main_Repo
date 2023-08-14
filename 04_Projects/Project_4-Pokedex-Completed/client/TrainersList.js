
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("/api/trainers");
        setTrainers(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <div>
      <h1>Trainer's List</h1>
      <ul>
        {trainers.map((trainer) => (
          <li key={trainer.id}>
            <Link to={`/trainers/${trainer.id}`}>
              <img src={trainer.imageURL} alt={trainer.firstName} style={{width: '200px', height: '200px'}} />
              <span>{`${trainer.firstName} ${trainer.lastName}`}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainersList;
