import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Hello World From Gatsby">
      THESE BE THE CHILDREN
    </Layout>
  )
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;