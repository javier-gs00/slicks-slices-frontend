import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return (
    // eslint-disable-next-line
    <Layout {...props}>{element}</Layout>
  );
}
