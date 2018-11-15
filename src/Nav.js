// @flow

import * as React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import Link from 'next/link';
import styled from 'styled-components';
import initEnvironment from './relay/createRelayEnvironment';

const Wrapper = styled.nav`
  display: ${({ open }) => (open ? 'block' : 'none')};
  min-width: 250px;
  border: 1px solid ${({ theme }) => theme.color.green};
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.color.greenLight} 0%, ${theme.color.greenLighter} 100%)`};
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const A = styled.a`
  display: block;
  padding: 6px 10px;
  color: ${({ theme }) => theme.color.black};
  font-variant: small-caps;
  background: ${({ selected, theme }) => (selected ? theme.color.green : 'none')};

  :focus,
  :hover {
    background: ${({ theme }) => theme.color.greenLight};
    color: ${({ theme }) => theme.color.black};
    text-decoration: none;
  }

  :active {
    background: ${({ theme }) => theme.color.greenLighter};
  }
`;

const Nav = ({ path, open }) => (
  <Wrapper open={open}>
    <QueryRenderer
      environment={initEnvironment()}
      query={graphql`
        query NavQuery {
          allPages {
            url
            title
          }
        }
      `}
      render={({ error, props }) => {
        if (error) return error.message;

        if (props) {
          return (
            <Ul>
              {props.allPages.map(page => {
                const url = `/${page.url}`;
                return (
                  <li key={page.title}>
                    <Link href={url} passHref>
                      <A selected={path === url}>{page.title}</A>
                    </Link>
                  </li>
                );
              })}
            </Ul>
          );
        }

        return null;
      }}
    />
  </Wrapper>
);

export default Nav;
