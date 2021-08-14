import React, { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import Card from '../../components/Card';

import { Container, List} from './styles';

import api from '../../services/api';

import pokemonf from '../../assets/pokemon.png';

const Home: React.FC = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [pokemons, setPokemons] = useState<any[]>([]);

  const [total, setTotal] = useState(0);
  const [filters, setFilters] = useState<any>({});

  async function loadPokemons() {
    const arrayFilters = Object.keys(filters);
    let stringFilters = '';

    if (arrayFilters.length > 0) {
      arrayFilters.forEach(key => {
        stringFilters += `&${key}=${filters[key]}`;
      });
    }

    const url = `pokemon?_page=${page}&_limit=${perPage}${stringFilters}`;

    const response = await api.get(url);
      setTotal(response.headers['x-total-count']);

      const pokemons = response.data.results.map(async (value: any) => {
        const response = await api.get(value.url) 

        return response.data;
      })
      Promise.all(pokemons).then(value => setPokemons(value));
  }
  

  useEffect(() => {
    loadPokemons();
  }, []);

  useEffect(() => {
    if (pokemons.length === 0) {
      loadPokemons();
    }
  }, [filters]);

  useEffect(() => {
    if (page > 1) {
      loadPokemons();
    }
  }, [page]);

  return (
    <>
      <Header/>
      <Container>
        <List>
          {pokemons.map(pokemon => (
            <Card pokemon={pokemon} key={pokemon.id}/>
          ))
        }
        </List>
      </Container>
    </>
  )
}

export default Home;