// @flow

import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Layout from '../src/Layout';
import withData from '../src/relay/withData';

class Page extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, path: router.asPath };
  }

  render() {
    const { Component, pageProps, path } = this.props;

    return (
      <>
        <Head>
          <title>ZŠ Libotenice</title>
        </Head>
        <Container>
          <Layout path={path}>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </>
    );
  }
}

export default withData(Page);
