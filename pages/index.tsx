import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import { Layout } from '../components';
import { TVShow } from '../models';

const PostLink: React.FC<{ show: TVShow }> = ({ show }) => (
    <li key={show.id}>
        <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
        </Link>
    </li>
);

const Home: NextPage<{ shows: TVShow[] }> = ({ shows }) => {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {shows.map(show => (
                    <PostLink show={show} />
                ))}
            </ul>
        </Layout>
    );
}

Home.getInitialProps = async () => {
    const data: { show: TVShow }[] = await fetch('https://api.tvmaze.com/search/shows?q=batman').then(res => res.json());

    return {
        shows: data.map(({ show }) => show)
    };
};

export default Home;
