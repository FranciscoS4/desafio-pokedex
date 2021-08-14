import styled, {css} from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  width: 50%auto;
  padding: 2rem;
  margin-top: 1rem;
  justify-content: center;
  display: flex;
  flex: 1;
  
  `;
  
export const Form = styled.form<FormProps>`

  width: 50%auto;
  padding: 2rem;
  margin-top: 1rem;
  justify-content: center;
  display: flex;
  flex: 1;
  
  div {
    margin-top: 8rem;
  }

  input {
    position: fixed;
    width: 765px;
    height: 54px;
    top: 79px;
    padding: 25px;
    margin-top: 1rem;
    outline: none;

    background: #FFFFFF;
    border: 1px solid #DEE0E3;
    box-sizing: border-box;
    border-radius: 8px;

    ${(props) => props.hasError && 
      css`
        border-color: #c53030;
    `}
  }

  div {
    position: fixed;
    margin-top: 2rem;
  }
`;
