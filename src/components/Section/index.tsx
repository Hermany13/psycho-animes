import SectionTitle from 'components/SectionTitle';
import Anime from 'models/Anime';
import * as S from './styles';
import Card from 'components/Card';

interface Props {
  animes: Anime[];
  title: string;
}

const SeasonSection: React.FC<Props> = ({ animes, title }) => {
  return (
    <S.Container>
      <div className="content">
        <SectionTitle color="#000" title={title} />
        <div className="cards-container">
          {animes.map((anime: Anime) => {
            return <Card {...anime} key={anime.id} />;
          })}
        </div>
      </div>
    </S.Container>
  );
};

export default SeasonSection;
