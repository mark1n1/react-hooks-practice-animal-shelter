import React from "react";

function Pet({ pet, onAdoptPet }) {
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          { pet.gender === 'male' ? '♂':'♀'} { pet.name }
        </span>
        <div className="meta">
          <span className="date">{ pet.type }</span>
        </div>
        <div className="description">
          <p>Age: { pet.age }</p>
          <p>Weight: { pet.weight }</p>
        </div>
      </div>
      <div className="extra content">
        <button 
          className={ pet.isAdopted ? "ui button disabled button":"ui primary button"}
          onClick={ pet.isAdopted ? null : () => onAdoptPet(pet.id) }  
        >
          { pet.isAdopted ? "Already adopted":"Adopt pet"}
        </button>
      </div>
    </div>
  );
}

export default Pet;
