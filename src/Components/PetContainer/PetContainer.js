import { useState, useEffect } from 'react';
import './PetContainer.css';
import PetCard from '../PetCard/PetCard';
import { fetchUsers } from '../../apiCalls';

const PetContainer = ({ users }) => {
  const petCards = users.reduce((pets, user) => {
    user.pets.forEach(pet => {
      pets.push(
        <PetCard
          key={ pet.id + pet.name }
          id={ pet.id }
          image={ pet.image }
          name={ pet.name }
        />
      );
    });

    return pets;
  }, []);

  return (
    <section className='all-pets'>
      { petCards }
    </section>
  );
};

export default PetContainer;