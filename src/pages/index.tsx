import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { getTrendingAnimes } from 'services/Animes';
import Anime from 'models/Anime';
import HomeContent from 'PageContents/HomeContent';

// Components
import Layout from 'layout';
interface Props {
  seasonAnime: Anime[];
}

const Home: NextPage<Props> = ({ seasonAnime }) => {
  return (
    <>
      <Head>
        <title>Psycho Animes</title>
        <meta
          name="description"
          content="Welcome to Psycho Animes! Where you can find the best anime from the best catalog :)"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Psycho Animes" />
        <meta property="og:url" content="https://psycho-animes.vercel.app/" />
        <meta
          property="og:description"
          content="Welcome to Psycho Animes! Where you can find the best anime from the best catalog :)"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/tc68cxz/psycho.png"
        />
      </Head>
      <Layout>
        <HomeContent seasonAnime={seasonAnime} />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const seasonAnime = await getTrendingAnimes();

  return {
    props: {
      seasonAnime,
    },
    revalidate: 1,
  };
};

export default Home;
