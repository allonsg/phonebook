import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const SignOutButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  color: black;

  :hover {
    color: red;
  }
`;
