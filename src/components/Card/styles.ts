import styled from 'styled-components';

export const Container = styled.div`
  
  width: 165px;
  height: 236px;
  top: 172px;
  align-items: initial;

  display: flex;
  flex-direction: column;

  background: #FFFFFF;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
    transition-duration: 200ms;
  }

  h1 {
    position: relative;
    align-items: initial;
    margin-left: 10px;
    margin-bottom: 2px;
  }

  h2 {
    position: relative;
    font-size: 13px;
    margin-left: 10px;
    color: #8E8787;
  }

  img {
    position: initial;
    width: 56px;
    height: 60px;
    left: 393px;
    top: 201px;
    display: flex;
    margin: auto;
    margin-bottom: 15px;

    &:hover {
    transform: scale(1.1);
    transition-duration: 200ms;
    }
  }

  button {
    position: initial;
    width: 147px;
    height: 32px;
    left: 347px;
    top: 362px;
    margin: auto;
    margin-bottom: 17px;
    border: 0;
    font-size: 10px;

    background: #FFCB05;
    border-radius: 5px;

    &:hover {
      transform: scale(1.02);
      transition-duration: 200ms;
    }
  }
`;

