import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-display: column;
  gap: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
