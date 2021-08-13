import React from 'react';
import { FiSearch } from 'react-icons/fi'

import { Header } from '../../components/Header';

import { Container } from './styles';

import Card from '../../components/Card';

const Search: React.FC = () => {
  return(
    <>
      <Header/>
      <Container>
        <input placeholder="Pesquisar"/>
        
      </Container>
    </>
  )
}

export default Search;