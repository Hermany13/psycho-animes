import Anime from 'models/Anime';
import Banner from './Banner';
import Description from './Description';

interface Props {
  anime: Anime;
}

const FallbackAnimePage: React.FC<Props> = ({ anime }) => {
  return (
    <>
      <Banner anime={anime} />
      <Description description={anime.attributes.synopsis} />
    </>
  );
};

export default FallbackAnimePage;
