import * as S from './styles';

const FallbackAnimePage: React.FC = () => {
  return (
    <S.Container>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Container>
  );
};

export default FallbackAnimePage;
