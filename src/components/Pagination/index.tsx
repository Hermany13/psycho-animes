// Styled components
import * as S from './styles';
import { Button } from 'antd';

interface Props {
  offSet: number;
  setOffset(offSet: number): void;
}

const Pagination: React.FC<Props> = ({ offSet, setOffset }) => {
  const onClickPrev = () => {
    if (offSet > 0) {
      setOffset(offSet - 1);
    }
  };

  const onClickNext = () => {
    setOffset(offSet + 1);
  };

  return (
    <S.Container>
      <div className="button">
        <Button type="primary" onClick={onClickPrev}>
          Prev
        </Button>
        <div className="number">{offSet}</div>
        <Button type="primary" onClick={onClickNext}>
          Next
        </Button>
      </div>
    </S.Container>
  );
};

export default Pagination;
