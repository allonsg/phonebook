import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  width: 100%;
  gap: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;
