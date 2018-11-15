// @flow

import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Header';
import themeDef from './theme';
import Nav from './Nav';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.md.min`
      background: ${theme.color.blue};
    `}
  }
  h1,
  h2,
  h3 {
    margin: 0 0 1em;
    line-height: 1.2;
    font-variant: small-caps;
    font-weight: normal;
    color: ${({ theme }) => theme.color.blue};
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
  h1,
  h2,
  h3 {
    a {
      color: ${({ theme }) => theme.color.blue};

      :hover {
        text-decoration: none;
      }
    }
  }
`;

const Page = styled.div`
  max-width: 980px;
  background: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.lg.min`
    margin: 10px auto;
  `};
`;

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 10px 20px 10px 10px;
`;

const DesktopOnly = styled.div`
  ${({ theme }) => theme.mq.lg.max`
    display: none;
  `};
`;

const Layout = ({ children, path }) => (
  <ThemeProvider theme={themeDef}>
    <>
      <Page>
        <Header path={path} />
        <Container>
          <Content>{children}</Content>
          <DesktopOnly>
            <Nav path={path} open />
          </DesktopOnly>
        </Container>
      </Page>
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default Layout;
