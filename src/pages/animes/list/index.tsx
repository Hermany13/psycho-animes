import type { NextPage, GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Layout from 'layout';
import AnimeList from 'PageContents/AnimeList';
import Anime from 'models/Anime';
import { getAllAnimes, getAnimesBySearch } from 'services/Animes';
import Pagination from 'components/Pagination';

interface Props {
  animes: Anime[];
}

const Home: NextPage<Props> = ({ animes }) => {
  const [offSet, setOffSet] = useState(0);
  const [paginatedAnimes, setPaginatedAnimes] = useState(animes);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function allAnimeChangePage(): Promise<void> {
      const animes: Anime[] = await getAllAnimes(9, offSet);
      setPaginatedAnimes(animes);
    }

    if (!search) {
      allAnimeChangePage();
    }
  }, [search, offSet]);

  useEffect(() => {
    async function searchAnime(): Promise<void> {
      const animes: Anime[] = await getAnimesBySearch(search, 9, offSet);
      setPaginatedAnimes(animes);
    }

    if (search) {
      searchAnime();
    }
  }, [search, offSet]);

  return (
    <>
      <Layout>
        <AnimeList
          animes={paginatedAnimes}
          setOffset={setOffSet}
          offSet={offSet}
          setSearch={setSearch}
        />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const animes = await getAllAnimes();

  return {
    props: {
      animes,
    },
    revalidate: 1,
  };
};

export default Home;
