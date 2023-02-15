import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainBlock = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  height: 80vh;

  @media screen and (max-width: 768px) {
    padding-top: 10px;
    overflow: auto;
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
