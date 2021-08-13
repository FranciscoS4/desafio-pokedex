import styled from 'styled-components'
import { shade } from 'polished';

export const HeaderContainer = styled.div`
  height: 4.5rem;
  width: 100%;
  border-bottom: 1px solid #ddd;
  background-color: #FFCB05;
`;

export const HeaderContent = styled.nav`
  height: 100%;
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  strong {
    font-size: 1.5rem;
  }

  div{
    display: flex;
    flex: 1;
    box-sizing: border-box;
    justify-content: center;

    a {
      color: inherit;
      text-decoration: none;
      font-size: 1.1rem;

      &:hover {
        border: 10px;
        transform: scale(1.1);
        transition: transform 0.10s;
      }

      & + a {
        margin-left: 5rem;
      }
    }
  }
  
  img {
    width: 120px;
  }

  button {
    display: flex;
    width: 9rem;
    height: 3rem; 
    font-size: 18px;

    border-radius: 10px;
    background-color: transparent;
    border: 1px solid #343232;
    right: auto;
    text-align: left;

    cursor: pointer;

    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-left: auto;
  }
`;
