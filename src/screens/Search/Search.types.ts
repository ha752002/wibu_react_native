export type SearchProps = {
  // story: IStories;
  trendingKeywords: string[];
  genres?: string[];
};

export const SearchData: SearchProps = {
  genres: [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Psychological',
    'Romance',
    'Sci-Fi',
    'Slice of Life',
    'Sports',
    'Supernatural',
    'Thriller',
    'Historical',
    'Martial Arts',
    'Mecha',
    'Music',
    'Shounen',
    'Shoujo',
    'Josei',
    'Seinen',
    'School Life',
    'Tragedy',
    'Harem',
    'Isekai',
    'Magic',
    'Military',
    'Post-Apocalyptic',
    'Steampunk',
  ],
  trendingKeywords: [
    'Manga',
    'Anime',
    'One Piece',
    'Naruto',
    'Attack on Titan',
    'My Hero Academia',
    'Demon Slayer',
    'Tokyo Revengers',
    'Jujutsu Kaisen',
    'Black Clover',
  ],
};
