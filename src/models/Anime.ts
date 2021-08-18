export default interface Anime {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    titles: {
      en: string;
      en_jp: string;
      ja_jp: string;
    };
    canonicalTitle: string;
    averageRating: number;
    startDate: string;
    endDate: string;
    ageRatingGuide: string;
    subtype: string;
    showType: string;
    status: string;
    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
    coverImage?: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };
    episodeCount: number;
    youtubeVideoId: string;
    ratingRank: number;
    popularityRank: number;
  };
}
