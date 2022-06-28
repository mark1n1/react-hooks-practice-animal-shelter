import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleOnChangeType(type) {
    setFilters({ type: type });
  }

  function handleFindPetsClick() {
    if(filters.type === 'all') {
      fetch('http://localhost:3001/pets')
        .then((response) => response.json())
        .then((pets) => setPets(pets));
    } else if(filters.type === 'cat') {
      fetch('http://localhost:3001/pets?type=cat')
        .then((response) => response.json())
        .then((pets) => setPets(pets));
    } else if(filters.type === 'dog') {
      fetch('http://localhost:3001/pets?type=dog')
        .then((response) => response.json())
        .then((pets) => setPets(pets));
    } else if(filters.type === 'micropig') {
      fetch('http://localhost:3001/pets?type=micropig')
        .then((response) => response.json())
        .then((pets) => setPets(pets));
    }
  }

  function handleAdoptPet(id) {
    
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'PATCH',
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isAdopted: true
      })
    })
      .then((response) => response.json())
      .then((updatedPet) => {
        const updatedPets = pets.map((pet) => {
          if(pet.id === updatedPet.id) {
            return updatedPet;
          } else {
            return pet;
          }
        });

        setPets(updatedPets);
      });
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={ handleOnChangeType } onFindPetsClick={ handleFindPetsClick }/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={ pets } onAdoptPet={ handleAdoptPet }/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
