import React from 'react';
import Anime from 'models/Anime';
import Image from 'next/image';
import * as S from './styles';

// Images
import DefaultBanner from 'assets/default.jpg';

interface Props {
  anime: Anime;
}

const Banner: React.FC<Props> = ({ anime }) => {
  return (
    <S.Container>
      <div className="content-hover">
        <div className="content">
          <Image
            src={anime.attributes.coverImage?.original || DefaultBanner}
            alt="Anime Banner"
            layout="intrinsic"
            height={1719}
            width={3056}
          />
        </div>
      </div>
      <div className="blur">
        {anime.attributes.youtubeVideoId !== null && (
          <div className="iframe">
            <iframe
              id="ytplayer"
              width="440"
              height="260"
              src={`//www.youtube.com/embed/${anime.attributes.youtubeVideoId}`}
              frameBorder="0"
              title={anime.attributes.canonicalTitle}
            />
          </div>
        )}
        <div className="data-container">
          <div className="title">{anime.attributes.canonicalTitle}</div>
          <div className="row">
            <div className="japanese">{anime.attributes.titles.ja_jp}</div>
            <span className="type">{anime.attributes.showType}</span>
            {anime.attributes.averageRating && (
              <S.Rating rating={anime.attributes.averageRating}>
                {anime.attributes.averageRating}
              </S.Rating>
            )}
            <span>Popularity Rank: {anime.attributes.popularityRank}</span>
          </div>
          <div className="meta">
            Number of episodes: {anime.attributes.episodeCount}
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default Banner;
