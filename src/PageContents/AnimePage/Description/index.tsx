import React from 'react';
import * as S from './styles';

interface Props {
  description: string;
}

const Banner: React.FC<Props> = ({ description }) => {
  return (
    <S.Container>
      <div className="content">
        <h2 className="title">Description</h2>
        {description}
      </div>
    </S.Container>
  );
};

export default Banner;
