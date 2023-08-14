
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleTrainer = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await axios.get(`/api/trainers/${id}`);
        setTrainer(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrainer();
  }, [id]);

  if (!trainer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{trainer.firstName} {trainer.lastName}</h2>
      <p>Team: {trainer.team}</p>
      <img src={trainer.imageURL} alt={`${trainer.firstName} ${trainer.lastName}`} />
      <h3>Pokémon:</h3>
      <ul>
        {trainer.Pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <p>{pokemon.name}</p>
            <p>Type: {pokemon.type}</p>
            <img src={pokemon.image} alt={pokemon.name} style={{width: '200px', height:'200px'}}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleTrainer;
