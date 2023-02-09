import styled, { keyframes } from 'styled-components';
import { BsArrowRightSquare } from 'react-icons/bs';

const btnAnim = keyframes` {
 from {
    left: -100%;
  }

to{
    left: 100%;
  }
}`;

export const LoginBox = styled.div`
  width: 400px;
  padding: 40px;
  background: ${props => props.theme.bgForm};
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 300px;
    padding: 20px;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 26px;
  gap: 10px;
  margin-bottom: 30px;
  color: ${props => props.theme.colorForm};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const LoginIcon = styled(BsArrowRightSquare)`
  fill: ${props => props.theme.colorForm};
  width: 35px;
  height: 35px;
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const UserBox = styled.div`
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: absolute;
  top: ${props => (props.emailText || props.passText ? '-20px' : '0')};
  left: 0;
  padding: 10px 0;
  font-size: ${props => (props.emailText || props.passText ? '12px' : '16px')};
  color: ${props =>
    props.emailText || props.passText ? '#bdb8b8' : props.theme.colorForm};
  pointer-events: none;
  transition: 0.5s;

  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.mobile.formFS};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: ${props => props.theme.colorForm};
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colorForm};
  outline: none;
  background: transparent;

  @media screen and (max-width: 768px) {
    font-size:  ${props => props.theme.mobile.formFS};
  }

    &: focus ~label,
    &:valid ~ label{
    top: -20px;
    left: 0;
    color: #bdb8b8;
    font-size: 12px;
        @media screen and (max-width: 768px) {
        font-size: 10px;
      }

    }
`;

export const Button = styled.button`
  position: relative;
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  color: ${props => props.theme.colorForm};
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 30px;
  letter-spacing: 4px;

  &:hover {
    background: ${props => props.theme.bgHeader};
    color: #fff;
    border-radius: 5px;
    border-color: transparent;
  }

  &:disabled {
    cursor: default;
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export const AnimatedBorder = styled.span`
  position: absolute;
  display: block;

  :nth-child(1) {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.theme.bgHeader}
    );
    animation: ${btnAnim} ${props => (props.disabled ? '0s' : '2s')} linear
      infinite;
  }
`;

export const FormBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
