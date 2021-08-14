import React, { useState, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header';

import { Container, Form, CardContainer, Error } from './styles';

import Card from '../../components/Card';
import api from '../../services/api';

const Search: React.FC = () => {

  const [newPokemon, setNewPokemon] = useState('');
  const [pokemon, setPokemon] = useState<any>()
  const [inputError, setInputError] = useState('');

  async function handleAddPokemon(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newPokemon) {
      setInputError('Digite o nome de um Pokemon');
      return;
    }

    try {
      const response = await api.get(`pokemon/${newPokemon}`)

      setNewPokemon('');
      setPokemon(response.data);
      setInputError('')
      

    }catch{
      setInputError('Erro na busca por esse pokemon');
    }
  }

  return(
    <>
      <Header/>
      <Container>
        <Form hasError={!!inputError} onSubmit={handleAddPokemon}>
          <input value={newPokemon}placeholder="Pesquisar"  onChange={(p) => setNewPokemon(p.target.value)}/>
          <button type="submit"><FiSearch /></button>
        </Form>

        { inputError && <Error>{inputError}</Error> }

        <CardContainer>
          {pokemon && <Card pokemon={pokemon}/>}
        </CardContainer>

      </Container>
    </>
  )
}

export default Search;