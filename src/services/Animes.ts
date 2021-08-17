import api from './api';

// Interfaces
import Anime from 'models/Anime';
import { AnimeRequest } from 'models/Requests';

export const getAllAnimes = async (): Promise<Anime[]> => {
  const { data: response } = await api.get<AnimeRequest>(`anime`);

  return response.data;
};

export const getFilteredAnimes = async (
  filterBy: string,
  value: string,
): Promise<Anime[]> => {
  const { data: response } = await api.get<AnimeRequest>(
    `anime?filter[${filterBy}]=${value}`,
  );

  return response.data;
};
