import Anime from 'models/Anime';
import Banner from './Banner';
import SeasonSection from './SeasonSection';

interface Props {
  seasonAnime: Anime[];
}

const HomeContent: React.FC<Props> = ({ seasonAnime }) => {
  return (
    <>
      <Banner />
      <SeasonSection seasonAnime={seasonAnime} />
    </>
  );
};

export default HomeContent;
