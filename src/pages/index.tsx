import type { NextPage, GetStaticProps } from 'next';
import { getAllAnimes, getFilteredAnimes } from 'services/Animes';
import Anime from 'models/Anime';
import HomeContent from 'PageContents/HomeContent';

// Components
import Layout from 'layout';
interface Props {
  animes: Anime[];
  seasonAnime: Anime[];
}

const Home: NextPage<Props> = ({ animes, seasonAnime }) => {
  return (
    <Layout>
      <HomeContent seasonAnime={seasonAnime} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [animes, seasonAnime] = await Promise.all([
    getAllAnimes(),
    getFilteredAnimes('season', 'winter'),
  ]);

  return {
    props: {
      animes,
      seasonAnime,
    },
    revalidate: 1,
  };
};

export default Home;
