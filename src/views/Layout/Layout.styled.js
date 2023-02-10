import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainBlock = styled.main`
  position: relative;
  padding: ${props => (props.user ? '0' : '100px')} 20px 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const FooterBlock = styled.footer`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  margin-top: auto;
`;

export const FooterWrapper = styled.div`
  max-width: 1240px;
  margin: 0px auto;
  padding: 0px 16px;
`;

export const FooterLink = styled.a`
  margin: 0px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  text-align: center;
  color: grey;
`;
