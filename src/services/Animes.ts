import api from "./api";

// Interfaces
import Anime from "models/Anime";
import { AnimeRequest } from "models/Requests";

export const getAllAnimes = async (): Promise<Anime[]> => {
  const { data: response } = await api.get<AnimeRequest>(`anime`);

  return response.data;
};
