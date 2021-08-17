import SectionTitle from 'components/SectionTitle';
import Anime from 'models/Anime';
import * as S from './styles';
import Card from 'components/Card';

interface Props {
  seasonAnime: Anime[];
}

const SeasonSection: React.FC<Props> = ({ seasonAnime }) => {
  return (
    <S.Container>
      <div className="content">
        <SectionTitle color="#000" title="In This Winter" />
        <div className="cards-container">
          {seasonAnime.map((anime: Anime) => {
            return <Card {...anime} key={anime.id} />;
          })}
        </div>
      </div>
    </S.Container>
  );
};

export default SeasonSection;
