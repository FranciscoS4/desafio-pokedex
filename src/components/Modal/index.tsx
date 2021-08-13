import React from 'react';
import ReactDOM  from 'react-dom';

import {FiX} from 'react-icons/fi';
import { boolean } from 'yup';

import { Wrapper, Header, StyledModal, HeaderText, CloseButton, Content, Backdrop } from './styles';


interface Modal {
  isOpen: boolean;
  hide: () => void;
  pokemon: any;
}

// const Modal: React.FC<ModalProps> = ({ imgf, imgb, height, weight, hp, atk, def, specialAtk, specialDef, speed, hide, isOpen}) => {
const Modal: React.FC<Modal> = ({isOpen, hide, pokemon}) => {
  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>Detalhes</HeaderText>
            <CloseButton onClick={hide}><FiX size={25}/></CloseButton>
          </Header>
          <Content 
            stat={pokemon.stats.map((stat: any) => stat)} 
            type={pokemon.types.map((type: any) => type)}>
            <h1>{pokemon.name}</h1>

            <img src={pokemon.sprites.front_default} alt="front" className="front"></img>
            <img src={pokemon.sprites.back_default} alt="back" className="back"></img>

            <div className="measures">
              <h2>{pokemon.height}m</h2>
              <h2>{pokemon.weight}kg</h2>
            </div>

            <h2 className="estatistic">Estatisticas</h2>
            <div className="progress-bar1" id='hp' ></div>
            <div className="progress-bar2" id='atk' ></div>
            <div className="progress-bar3" id='def' ></div>
            <div className="progress-bar4" id='satk' ></div>
            <div className="progress-bar5" id='sdef' ></div>
            <div className="progress-bar6" id='spd' ></div>
            
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  );
    return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
