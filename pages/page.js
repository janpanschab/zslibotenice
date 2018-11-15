// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import withData from '../src/relay/withData';
import Page from '../src/Page';

const TextPage = ({ page }) => <Page data={page} />;

export default withData(TextPage, {
  query: graphql`
    query pageQuery($urlFilter: PageModelFilter!) {
      page(filter: $urlFilter) {
        title
        text
      }
    }
  `,
});
