import React from 'react';
import * as S from './styles';
import { Input } from 'antd';
import Anime from 'models/Anime';
import Card from 'components/Card';
import Pagination from 'components/Pagination';
const { Search } = Input;
const onSearch = (value: string) => console.log(value);

interface Props {
  animes: Anime[];
  offSet: number;
  setOffset(offSet: number): void;
  setSearch(search: string): void;
}

const Banner: React.FC<Props> = ({ animes, offSet, setOffset, setSearch }) => {
  const onSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <S.Container>
      <div className="content">
        <Search
          placeholder="Insert keywords"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />

        <div className="cards-container">
          {animes.map((anime: Anime) => {
            return <Card {...anime} key={anime.id} />;
          })}
        </div>

        <Pagination offSet={offSet} setOffset={setOffset} />
      </div>
    </S.Container>
  );
};

export default Banner;
