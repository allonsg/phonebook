import {
  BsMoonStars,
  BsSun,
  BsArrowRightSquare,
  BsPencil,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.bgHeader};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.color};
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  font-weight: 600;
  border: 1px solid transparent;
  padding: 5px;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.mobile.headerFS};
  }

  &.active {
    color: ${props => props.theme.hoverColor};
    border-color: ${props => props.theme.hoverColor};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.hoverColor};
    border-color: ${props => props.theme.hoverColor};
  }
`;

export const HeaderButton = styled.button`
  cursor: pointer;
  color: ${props => props.theme.color};
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  font-weight: 600;
  border: 1px solid transparent;
  padding: 5px;
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.mobile.headerFS};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${props => props.theme.hoverColor};
    border-color: ${props => props.theme.hoverColor};
  }

  &:hover svg {
    fill: ${props => props.theme.hoverColor};
  }
`;

export const LoginIcon = styled(BsArrowRightSquare)`
  fill: ${props => props.theme.color};
  width: 22px;
  height: 22px;
  margin-left: 5px;

  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const AddContactIcon = styled(BsPencil)`
  fill: ${props => props.theme.color};
  width: 20px;
  height: 20px;
  margin-left: 5px;

  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const SunThemButton = styled(BsSun)`
  cursor: pointer;
  width: 21px;
  height: 21px;
  user-select: none;
  fill: ${props => props.theme.color};

  @media screen and (max-width: 768px) {
    width: ${props => props.theme.mobile.svgSize};
    height: ${props => props.theme.mobile.svgSize};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    fill: ${props => props.theme.hoverColor};
  }
`;

export const MoonThemButton = styled(BsMoonStars)`
  cursor: pointer;
  width: 21px;
  height: 21px;
  user-select: none;
  fill: ${props => props.theme.color};

  @media screen and (max-width: 768px) {
    width: ${props => props.theme.mobile.svgSize};
    height: ${props => props.theme.mobile.svgSize};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    fill: ${props => props.theme.hoverColor};
  }
`;

export const HomeButton = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.color};
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  font-weight: 600;
  ${props => props.theme.appBar};

  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.mobile.headerFS};
  }
`;

export const WelcomeUser = styled.b`
  color: ${props => props.theme.color};
  font-size: 1.2rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: ${props => props.theme.mobile.headerFS};
  }
`;
