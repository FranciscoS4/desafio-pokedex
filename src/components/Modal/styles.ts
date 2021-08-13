import styled, {css} from 'styled-components';

interface ModalProps {
  stat: any;
  type: ['normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' 
        | 'ghost' | 'steel' | 'fire' | 'water' | 'grass' | 'electric' | 'psychic'
        | 'ice' | 'dragon' | 'dark' | 'fairy' | 'unknown' | 'shadow'];
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
export const Content = styled.div<ModalProps>`
  display: flex;
  width: 87%;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  
  h1 {
    font-size: 24px;
  }

  .estatistic {
    position: absolute;
    font-size: 13px;
    color: #B8B8B8;
    margin-top: 18rem;
  }

  .front {
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

  .back {
    position: absolute;
    width: 84.53px;
    height: 87.71px;
    top: 135.13px;
    margin-top: 1rem;

    background-color: #F3F3F3;
    border-radius: 8px;

  }

  .measures {
    position: absolute;
    margin-top: 11rem;
    column-count: 2;
    column-width: 2rem;
    font-size: 18px;
  }

  .progress-bar1{
    position:absolute;
    --progress: 38;
    height: 9px;
    width: 244px;
    background-color: #F3F3F3;
    display: flex;
    border-radius: 50px;
    margin-top: 20rem;

    h1 {
      color: #B8B8B8;
    }
  }

  .progress-bar1::before{
    content: "";
    width: calc(var(--progress) * 1%);
    border-radius: 50px;
    background-color: #FFCB05;
  }

  .progress-bar2{
      position:absolute;
      --progress: 70;
      height: 9px;
      width: 244px;
      background-color: #F3F3F3;
      display: flex;
      border-radius: 50px;
      margin-top: 21.5rem;

      h1 {
        color: #B8B8B8;
      }
  }

  .progress-bar2::before{
    content: "";
    width: calc(var(--progress) * 1%);
    border-radius: 50px;
    background-color: #FFCB05;
  }

  .progress-bar3{
      position:absolute;
      --progress: 62;
      height: 9px;
      width: 244px;
      background-color: #F3F3F3;
      display: flex;
      border-radius: 50px;
      margin-top: 23rem;

      h1 {
        color: #B8B8B8;
      }
  }

  .progress-bar3::before{
    content: "";
    width: calc(var(--progress) * 1%);
    border-radius: 50px;
    background-color: #FFCB05;
  }

  .progress-bar4{
      position:absolute;
      --progress: 12;
      height: 9px;
      width: 244px;
      background-color: #F3F3F3;
      display: flex;
      border-radius: 50px;
      margin-top: 24.5rem;

      h1 {
        color: #B8B8B8;
      }
  }

  .progress-bar4::before{
    content: "";
    width: calc(var(--progress) * 1%);
    border-radius: 50px;
    background-color: #FFCB05;
  }

  .progress-bar5{
      position:absolute;
      --progress: 95;
      height: 9px;
      width: 244px;
      background-color: #F3F3F3;
      display: flex;
      border-radius: 50px;
      margin-top: 26rem;

      h1 {
        color: #B8B8B8;
      }
  }

  .progress-bar5::before{
    content: "";
    width: calc(var(--progress) * 1%);
    border-radius: 50px;
    background-color: #FFCB05;
  }

  .progress-bar6{
      position:absolute;
      --progress: 10;
      height: 9px;
      width: 244px;
      background-color: #F3F3F3;
      display: flex;
      border-radius: 50px;
      margin-top: 27.5rem;

      h1 {
        color: #B8B8B8;
      }
  }

  .progress-bar6::before{
    content: "";
    width: calc(var(--progress) * 1%);
    border-radius: 50px;
    background-color: #FFCB05;
  }

  

`;
