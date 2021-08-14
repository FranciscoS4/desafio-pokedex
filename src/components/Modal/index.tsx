import React from 'react';
import ReactDOM  from 'react-dom';

import {FiX} from 'react-icons/fi';

import { 
  Wrapper, 
  Header, 
  StyledModal, 
  HeaderText, 
  CloseButton, 
  Content, 
  Backdrop, 
  Estatistic,
  ProgressBarDiv,
  ProgressBarName, 
  ProgressBar,
  ProgressBarStat
 } from './styles';


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
          <Content>
            <h1>{pokemon.name}</h1>

            <img src={pokemon.sprites.front_default} alt="front" className="front"></img>
            <img src={pokemon.sprites.back_default} alt="back" className="back"></img>

            <div className="measures">
              <h2>{pokemon.height}m</h2>
              <h2>{pokemon.weight}kg</h2>
            </div>

            <Estatistic>Estatisticas</Estatistic>

           <ProgressBarDiv>
              {pokemon.stats.map((stat: any) => {
                let totalStats = 0;
                  totalStats += stat.base_stat;
                  return (
                    <>
                      <ProgressBarName>{stat.stat.name}</ProgressBarName>
                      <ProgressBar base_stat={stat.base_stat}></ProgressBar>
                      <ProgressBarStat>{stat.base_stat}</ProgressBarStat>
                    </>
                  );
              
                })  
              }
          </ProgressBarDiv>
            
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  );
    return isOpen ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
