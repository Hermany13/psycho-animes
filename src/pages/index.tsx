import type { NextPage, GetStaticProps } from 'next';
import { getAllAnimes, getFilteredAnimes } from 'services/Animes';
import Anime from 'models/Anime';
import HomeContent from 'PageContents/HomeContent';

// Components
import Layout from 'layout';
interface Props {
  seasonAnime: Anime[];
}

const Home: NextPage<Props> = ({ seasonAnime }) => {
  return (
    <Layout>
      <HomeContent seasonAnime={seasonAnime} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const seasonAnime = await getFilteredAnimes('season', 'winter');

  return {
    props: {
      seasonAnime,
    },
    revalidate: 1,
  };
};

export default Home;
