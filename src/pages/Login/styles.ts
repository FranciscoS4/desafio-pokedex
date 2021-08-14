import styled, { keyframes} from 'styled-components';
import loginBackground from '../../assets/light.png';
import Tooltip from '../../components/Tooltip';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${loginBackground});
  background-size: cover;

`;

export const Error = styled(Tooltip)`
  height: 20px;

  span {
    padding:1px;
    background: #FF3326;
    color: #fff;

    &::before {
      border-color: #FF3326 transparent;
    }
  }
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateX(-50px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`

  img {
    position: absolute;
    width: 206px;
    height: 76px;
    left: 138px;
    top: 33px;
  }

  form {
    margin: 80px 0;
    width: 340px;

    h1 {
      position: absolute;
      width: 365px;
      height: 108px;
      left: 138px;
      top: 188px;

      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 54px;
      
      color: #1E1E1F;
    }

   button{
      position: absolute;
      width: 365px;
      height: 54px;
      left: 138px;
      top: 500px;
      margin-top: 1rem;
      border: 0;
      text-decoration: none;
      color: #1E1E1F;

      background: #FFCB05;
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        border: 10px;
        transform: scale(1.01);
        transition: transform 0.10s;
      }
    }
  }

  animation: ${appearFromLeft} 2s;
`;