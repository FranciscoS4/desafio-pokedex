import styled, { css } from "styled-components";
import Tooltip from '../Tooltip';


interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 365px;
  height: 54px;
  left: 138px;
  top: 344px;
  background: #FFFFFF;
  border-radius: 8px;
  padding: 25px;
  
  
  border: 1px solid #7D7E80;
  box-sizing: border-box;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 4.5rem;
  }

  ${props => props.isErrored && css`
    border-color: #FF3326;

  `}

  ${props => props.isFocused && css`
    color: #3B5CA8;
    border-color: #3B5CA8;
  `}

  ${props => props.isFilled && css`
    color: #3B5CA8;
  `}
  
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #1E1E1F;
    outline: 0 ;

    &::placeholder {
      color: #1E1E1F;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: auto;
  }

  span {
    background: #FF3326;
    color: #fff;

    &::before {
      border-color: #FF3326 transparent;
    }
  }
`;