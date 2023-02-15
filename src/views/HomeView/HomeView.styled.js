import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LoggedInTitle = styled.h2`
  margin: 0px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.2;
  color: ${props => props.theme.hpMainColor};
`;

export const MainHomeBlock = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const LoggedInText = styled.p`
  margin: 0;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.2;
  color: ${props => props.theme.hpMainColor};
`;

export const RedirectLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.hpLinkColor};
`;
