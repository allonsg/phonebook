import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  justify-content: center;
`;

export const FiltertInputWrapper = styled.div`
  position: relative;
  width: 70%;

  &:before {
    transition: 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }

  &:after {
    content: '';
    transform: scaleX(0);
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    will-change: transform;
    border-bottom: 2px solid ${props => props.theme.underlineColor};
    border-bottom-color: ${props => props.theme.underlineColor};
  }

  &:before,
  &:after {
    content: '';
    left: 4px;
    right: 0;
    position: absolute;
    pointer-events: none;
    bottom: 0px;
    width: 99.3%;
    border-bottom: 1px solid ${props => props.theme.bgFilter};
  }

  &:focus-within:before {
    border-bottom: 1px solid ${props => props.theme.underlineColor};
    transform: scaleX(1);
  }

  &:focus-within:after {
    border-bottom: 2px solid ${props => props.theme.underlineColor};
    transform: scaleX(1);
  }

  :focus-within input {
    background-color: ${props => props.theme.bgFilter};
    color: ${props => props.theme.filterColor};
  }

  :focus-within input::placeholder {
    opacity: 0;
  }
`;

export const FilterInput = styled.input`
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  max-height: 50px;
  background-color: ${props => props.theme.bgFilter};
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: ${props => props.theme.filterColor};
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  border: none;

  :focus,
  :active {
    outline: none;
    background-color: #353535;
  }

  &::placeholder {
    transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    opacity: 1;
    user-select: none;
    color: ${props => props.theme.filterColor};
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

export const AddContactText = styled.h2`
  color: ${props => props.theme.filterColor};
`;

export const AddLink = styled.span`
  text-decoration: underline;
`;
