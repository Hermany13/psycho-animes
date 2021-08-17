import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Styled components
import * as S from './styles';

// Interfaces
import Anime from 'models/Anime';

const Card: React.FC<Anime> = (anime: Anime) => {
  return (
    <S.Container>
      <Image
        src={anime.attributes.posterImage.original}
        alt="Anime"
        layout="fill"
        objectFit="cover"
      />
      <div className="blur">
        <div className="blur-content">
          <div className="title">{anime.attributes.canonicalTitle}</div>
          <div className="cat-container">
            <div className="cat">{anime.attributes.showType}</div>
            <div className="cat">{anime.attributes.subtype}</div>
          </div>
          <div className="text-align-container">
            <div className="description-container">
              {anime.attributes.synopsis}
            </div>
          </div>
          <div className="button-cart">
            {/* <Link href={`/produto/${product.slug}/${product.id}`}> */}
            {/* <a>Mais detalhes</a> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default Card;
