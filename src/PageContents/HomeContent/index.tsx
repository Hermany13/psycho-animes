import Anime from 'models/Anime';
import Banner from './Banner';
import Section from 'components/Section';

interface Props {
  trendingAnimes: Anime[];
}

const HomeContent: React.FC<Props> = ({ trendingAnimes }) => {
  return (
    <>
      <Banner />
      <Section animes={trendingAnimes} title="Trending" />
    </>
  );
};

export default HomeContent;
