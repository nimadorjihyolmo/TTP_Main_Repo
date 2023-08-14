import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleTrainer from "./SingleTrainer";

const SinglePokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [trainer, setTrainer] = useState(null);
  

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`/api/pokemon/${id}`);
        setPokemon(response.data);

        const trainerId = response.data.trainerId;
        const trainerResponse = await axios.get(`/api/trainer/${trainerId}`);
        setTrainer(trainerResponse.data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Trainer: {pokemon.trainer}</p>
      <p>Date Caught: {pokemon.date}</p>
      <img src={pokemon.image} alt={pokemon.name} style={{ width: '200px', height: '200px'}} />

      {/* Render the TrainerDetails component with the trainer data */}
      <SingleTrainer trainer={trainer} />
     
    </div>
  );
};


export default SinglePokemon;
