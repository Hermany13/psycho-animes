import React from 'react';
import * as S from './styles';

interface Props {
  description: string;
}

const Banner: React.FC<Props> = ({ description }) => {
  return (
    <S.Container>
      <div className="content">
        <div className="title">Description</div>
        {description}
      </div>
    </S.Container>
  );
};

export default Banner;
