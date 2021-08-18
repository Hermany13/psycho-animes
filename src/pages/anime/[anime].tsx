import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Anime from 'models/Anime';
import { getAnimeById } from 'services/Animes';

// Components
import Layout from 'layout';
import FallbackAnimePage from 'PageContents/FallbackAnimePage';
import AnimePage from 'PageContents/AnimePage';

interface Props {
  anime: Anime;
}

const defaultBanner = 'https://i.ibb.co/5kMkJBR/anime-desktop-nawpic.jpg';

const Home: NextPage<Props> = ({ anime }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <FallbackAnimePage />
      </Layout>
    );
  }
  return (
    <>
      <Head>
        <title>Psycho Animes - {anime.attributes.canonicalTitle}</title>
        <meta
          name="description"
          content={`${anime.attributes.synopsis.slice(0, 30)}...`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={anime.attributes.canonicalTitle} />
        <meta
          property="og:url"
          content={`https://psycho-animes.vercel.app/anime/${anime.id}`}
        />
        <meta
          property="og:description"
          content={`${anime.attributes.synopsis.slice(0, 30)}...`}
        />
        <meta
          property="og:image"
          content={anime.attributes.coverImage?.small || defaultBanner}
        />
      </Head>
      <Layout>
        <AnimePage anime={anime} />
      </Layout>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { anime: '7439' },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const anime = await getAnimeById(params?.anime);

  return {
    props: {
      anime,
    },
    revalidate: 1,
  };
};

export default Home;
