import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
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
      <Head>
        <title>Psycho Animes - Search</title>
        <meta name="description" content="Find your favorite animes here!" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Psycho Animes - Search" />
        <meta property="og:url" content="https://psycho-animes.vercel.app/" />
        <meta
          property="og:description"
          content="Find your favorite animes here!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/tc68cxz/psycho.png"
        />
      </Head>
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
