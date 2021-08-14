import React from 'react';
import { Container } from './styles';
import useModal from '../../hooks/useModal';
import Modal from '../Modal';


interface CardProps {
  pokemon: any;
}


const Card: React.FC<CardProps> = ({pokemon}) => {

  const { isOpen, toggle } = useModal();

  const showModal = () => {
    toggle()
  }

  return (
    <>
      <Container>
        <img src={pokemon.sprites.front_default} alt="Pokemon"></img>
        <h1>{pokemon.name}</h1>
        <h2>ID: {pokemon.id}</h2>
        <button onClick={showModal} >Ver detalhes</button>
      </Container>
      <Modal pokemon={pokemon} isOpen={isOpen} hide={toggle}></Modal>
    </>
  )
}

export default Card;