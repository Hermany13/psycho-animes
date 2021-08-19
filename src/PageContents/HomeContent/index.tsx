import Anime from 'models/Anime';
import Banner from './Banner';
import Section from 'components/Section';

interface Props {
  seasonAnime: Anime[];
  trendingAnimes: Anime[];
}

const HomeContent: React.FC<Props> = ({ seasonAnime, trendingAnimes }) => {
  return (
    <>
      <Banner />
      <Section animes={trendingAnimes} title="Trending" />
      <Section animes={seasonAnime} title="to watch this spring" />
    </>
  );
};

export default HomeContent;
