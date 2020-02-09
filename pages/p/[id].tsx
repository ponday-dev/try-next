import { NextPage } from 'next';
import { Layout } from '../../components';
import fetch from 'isomorphic-unfetch';

import { TVShow } from '../../models';

const Post: NextPage<{ show: TVShow }> = ({ show }) => (
    <Layout>
        <h1>{ show.name }</h1>
        <p>{ show.summary.replace(/<[/]?[pb]>/g, '') }</p>
        { show.image ? <img src={show.image.medium} /> : null }
    </Layout>
);

Post.getInitialProps = async context => {
    const { id } = context.query;
    const show: TVShow = await fetch(`https://api.tvmaze.com/shows/${id}`).then(res => res.json());

    return { show };
};

export default Post;
