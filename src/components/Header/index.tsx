import React from 'react'
import { Link } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi'

import {
  HeaderContainer,
  HeaderContent
} from './styles'

import Logo2 from '../../assets/logo2.png';

export const Header: React.FC = () => {

  return (
      <HeaderContainer>
        <HeaderContent>
          <img src={ Logo2 } alt="Light"/>
          <div>
            <Link to={"/favorites"}>Favoritos</Link>
            <Link to={"/search"}>Procurar</Link>
            <Link to={"/home"}>Ver Todos</Link>
          </div>
          <button>Sair <FiLogOut size= {18}/></button>
        </HeaderContent>
      </HeaderContainer>
  )
}