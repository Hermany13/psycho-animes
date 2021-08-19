import React from 'react';

// Components
import Image from 'next/image';

// Styled components
import * as S from './styles';

// Images
import HomeBanner from 'assets/mob.jpg';

const Banner: React.FC = () => {
  return (
    <S.Container>
      <div className="content-hover">
        <div className="content">
          <Image
            src={HomeBanner}
            alt="Banner psycho"
            layout="intrinsic"
            height={1719}
            width={3056}
          />
        </div>
      </div>
      <div className="blur">
        <h1 className="title-container">
          Psycho Animes
          <p>Where you find the best</p>
        </h1>
      </div>
    </S.Container>
  );
};

export default Banner;
