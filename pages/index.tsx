import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import { Layout } from '../components';

const PostLink: React.FC<{ id: string }> = ({ id }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${id}`}>
            <a>{id}</a>
        </Link>
    </li>
);

const Home: NextPage<{}> = () => {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    );
}

export default Home;
