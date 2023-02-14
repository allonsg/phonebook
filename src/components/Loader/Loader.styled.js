import styled, { keyframes } from 'styled-components';

const loadAnim = keyframes`{
  0% {
    width: 16px;
    transform: translateX(0px);
  }

  40% {
    width: 100%;
    transform: translateX(0px);
  }

  80% {
    width: 16px;
    transform: translateX(64px);
  }

  90% {
    width: 100%;
    transform: translateX(0px);
  }

  100% {
    width: 16px;
    transform: translateX(0px);
  }
}`;

const secondAnim = keyframes`{
   0% {
    transform: translateX(0px);
    width: 16px;
  }

  40% {
    transform: translateX(0%);
    width: 80%;
  }

  80% {
    width: 100%;
    transform: translateX(0px);
  }

  90% {
    width: 80%;
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0px);
    width: 16px;
  }
}`;

export const textAnim = keyframes`{
    0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }

  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }

  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }

  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }

  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
}`;

export const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderBlock = styled.div`
  width: 80px;
  height: 50px;
  position: relative;
`;

export const LoaderText = styled.span`
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.loaderTextColor};
  animation: ${textAnim} 3.5s ease both infinite;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;

export const Load = styled.span`
  background-color: ${props => props.theme.loaderBgMain};
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translateX(64px);
  animation: ${loadAnim} 3.5s ease both infinite;

  ::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.loaderBgSecond};
    border-radius: inherit;
    animation: ${secondAnim} 3.5s ease both infinite;
  }
`;
