import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About Us">
            <p>We are a post-apocalyptic media consultancy and dating coach company.</p>
        </Layout>
    )
};

export const Head = () => (
    <>
        <title>About Us</title>
        <meta name="description" content="Hi Google User! We are a post-apocalyptic media consultancy and dating coach company." />
    </>
);

export default AboutPage;