import React from 'react';
import {Route, Routes, Link, useParams} from "react-router-dom";
import TrainersList from './TrainersList';
import PokemonList from './PokemonList';
import SinglePokemon from './SinglePokemon';
import SingleTrainer from './SingleTrainer';

function FrontPage(){
  return(
    <>
      <h1>Welcome to Pokedex</h1>
      {/* Link in the "/" url path must use Link element that takes you to a path in "App" */}
      <Link to={"/pokemon"}>Pokemons List</Link>
      <p><Link to={"/trainers"}> Trainers List</Link> </p>
    </>
  )
}

function App () {
  return (
  
      <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/pokemon/:id" element={<SinglePokemon />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/trainers/:id" element={<SingleTrainer />} />
      </Routes>
  
  );
};

export default App;

