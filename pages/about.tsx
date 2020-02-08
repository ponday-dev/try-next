import { NextPage } from 'next';

import { Layout } from '../components';

const About: NextPage<{}> = () => {
    return (
        <Layout>
            <p>This is the about page</p>
        </Layout>
    );
}

export default About;
