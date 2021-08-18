import type { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Anime from 'models/Anime';
import { getAnimeById } from 'services/Animes';

// Components
import Layout from 'layout';
import FallbackAnimePage from 'PageContents/FallbackAnimePage';
import AnimePage from 'PageContents/AnimePage';

interface Props {
  anime: Anime;
}

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
    <Layout>
      <AnimePage anime={anime} />
    </Layout>
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
