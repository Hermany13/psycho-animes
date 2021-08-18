import api from './api';

// Interfaces
import Anime from 'models/Anime';
import { AnimesRequest, AnimeRequest } from 'models/Requests';

export const getAllAnimes = async (): Promise<Anime[]> => {
  const { data: response } = await api.get<AnimesRequest>(`anime`);

  return response.data;
};

export const getFilteredAnimes = async (
  filterBy: string,
  value: string,
): Promise<Anime[]> => {
  const { data: response } = await api.get<AnimesRequest>(
    `anime?filter[${filterBy}]=${value}&page[limit]=6`,
  );

  return response.data;
};

export const getTrendingAnimes = async (): Promise<Anime[]> => {
  const { data: response } = await api.get<AnimesRequest>(
    `trending/anime?limit=6`,
  );

  return response.data;
};

export const getAnimeById = async (id?: string | string[]): Promise<Anime> => {
  const { data: response } = await api.get<AnimeRequest>(`anime/${id}`);

  return response.data;
};
