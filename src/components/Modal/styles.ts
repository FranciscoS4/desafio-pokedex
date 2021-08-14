import styled, {css} from 'styled-components';

interface ModalProps {
  base_stat: any;
  // type: ['normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' 
  //       | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic'
  //       | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow'];
}

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 50%;
  outline: 0;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;
export const StyledModal = styled.div`
  position: relative;
  width: 378px;
  height: 639px;

  background: #FFFFFF;
  border-radius: 8px;
  margin: auto;
  border: none;
`;
export const Header = styled.div`
  display: flex;
  border-radius: 10px 10px 0 0;
  border: none;
  height: 4rem;
  width: 87%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #343232;
  margin-left: 1.5rem;
`;
export const HeaderText = styled.div`
  font-size: 16px;
  color: #343232;
  align-self: center;
  margin-top: 7px;
`;
export const CloseButton = styled.button`
  font-size: 10px;
  border: none;
  border-radius: 3px;
  margin-top: 10px;
  background: none;

  svg {
    color: #343232;
    &:hover{
      cursor: pointer;
      transform: scale(1.2);
      transition: transform 0.2s;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  width: 87%;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  
  h1 {
    font-size: 24px;
  }

  img {
    position: absolute;
    width: 84.53px;
    height: 87.71px;
    top: 135.13px;
    margin-top: 1rem;

    background-color: #F3F3F3;
    border-radius: 8px;

    background-color: #F3F3F3;
    border-radius: 5px;

    & + img {
      margin-left: 5.8rem;
    }
  }
  .measures {
    position: absolute;
    margin-top: 11rem;
    column-count: 2;
    column-width: 2rem;
    font-size: 18px;
  }
`;

export const Estatistic = styled.h2`
  position: absolute;
  font-size: 13px;
  color: #B8B8B8;
  margin-top: 18rem;
`;

export const ProgressBarDiv = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 60fr));
  grid-gap: 10px;
  width: 90%;
  align-content: center;
  align-self: center;
  justify-content:center;
  margin-top: 47rem;
  flex: 1;
`;

export const ProgressBarName = styled.h2`
  position: initial;
  font-size: 12px;
  color: #525150;
  text-transform: uppercase;
`;

export const ProgressBarStat = styled.h2`
  position: initial;
  font-size: 12px;
  color: #525150;
  margin-left: 5rem;
`


export const ProgressBar = styled.div<ModalProps>`
    position: initial;
    ${props => props.base_stat && css`
    --progress: ${props.base_stat};
    `}
    height: 9px;
    width: 160px;
    background-color: #F3F3F3;
    display: flex;
    border-radius: 50px;
    margin-top: 0.5rem;
    margin-left: 1rem;


    h1 {
      color: #B8B8B8;
    }

    &::before {
      position: static;
      content: "";
      width: calc(var(--progress) * 1%);
      border-radius: 50px;
      background-color: #FFCB05;
    }
`;
