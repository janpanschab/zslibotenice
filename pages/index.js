// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import styled from 'styled-components';
import withData from '../src/relay/withData';

const dateFormat = val => {
  const date = new Date(val);
  return date.toLocaleDateString();
};

const NewsItem = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;

const Homepage = ({ allNews }) => (
  <>
    <h1>Aktuality</h1>
    {allNews.map(({ id, title, text, published }) => (
      <NewsItem key={id}>
        <Title>{title}</Title>
        <h3>{dateFormat(published)}</h3>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </NewsItem>
    ))}
  </>
);

export default withData(Homepage, {
  query: graphql`
    query pagesQuery {
      allNews {
        id
        title
        text
        published
      }
    }
  `,
});
