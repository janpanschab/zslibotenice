// @flow

import React from 'react';

const Page = ({ data }) => (
  <>
    <h1>{data.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.text }} />
  </>
);

export default Page;
