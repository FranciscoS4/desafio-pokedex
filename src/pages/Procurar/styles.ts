import { shade } from 'polished';
import styled, {css} from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  width: 50%auto;
  margin-top: 1rem;
  justify-content: center;
  display: flex;
  flex: 1;
`;

export const CardContainer = styled.div`
  position: absolute;
  width: 100%auto;
  padding: 2rem;
  margin-top: 23rem;
  align-self: center;

`;
  
export const Form = styled.form<FormProps>`
  width: 50%auto;
  margin-top: 1rem;
  justify-content: center;
  display: flex;
  flex: 1;

  input {
    width: 765px;
    height: 54px;
    top: 79px;
    padding: 25px;
    outline: none;

    background: #FFFFFF;
    border: 1px solid #DEE0E3;
    box-sizing: border-box;
    border-radius: 8px 0 0 8px;

    ${(props) => props.hasError && 
      css`
        border-color: #c53030;
    `}
  }

  button {
    width: 50px;
    height:54px;
    background: #FFCB05;
    border-radius: 0px 8px 8px 0px;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#FFCB05')};
    }
  }

  div {
    position: fixed;
    margin-top: 2rem;
  }
`;

export const Error = styled.span`
  position: absolute;
  display: flex;
  color: #c53030;
  margin-top: 6.5rem;
  margin-right: 34rem; 
`;
