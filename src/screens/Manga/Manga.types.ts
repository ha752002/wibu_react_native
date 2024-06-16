import { IStoryInformation } from '../Manga/StoryDetails/Information/Information.types';
import { IChapters } from './StoryDetails/ChapterList/ChapterList.types';
import { IGenre } from './StoryDetails/Genres/Genres.types';

export type MangaProps = {
  story: Istory;
};

export interface Istory {
  storyInformation: IStoryInformation;
  chapters?: IChapters[];
  Genre: IGenre[];
}

export const story: MangaProps = {
  story: {
    storyInformation: {
      id: 1,

      thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',
      name: 'Sousou No Frieren',
      author: 'Tác giả 3',
      chapter: 23,
      views: 121212,
      created: new Date(),
      status: 'Updating',
    },

    Genre: [
      { genre: 'Fiction' },
      { genre: 'Fantasy' },
      { genre: 'Magic' },
      { genre: 'Fiction' },
      { genre: 'Fantasy' },
      { genre: 'Magic', AgeWarning: true },
    ],
    chapters: [
      { id: 1, chapter: 'chapter 1', UpdateTime: new Date() },
      { id: 2, chapter: 'chapter 2', UpdateTime: new Date() },
      { id: 3, chapter: 'chapter 3', UpdateTime: new Date() },
      { id: 4, chapter: 'chapter 4', UpdateTime: new Date() },
      { id: 5, chapter: 'chapter 5', UpdateTime: new Date() },
      { id: 6, chapter: 'chapter 6', UpdateTime: new Date() },
      { id: 7, chapter: 'chapter 7', UpdateTime: new Date() },
      { id: 8, chapter: 'chapter 8', UpdateTime: new Date() },
      { id: 9, chapter: 'chapter 9', UpdateTime: new Date() },
      { id: 10, chapter: 'chapter 10', UpdateTime: new Date() },
      { id: 11, chapter: 'chapter 11', UpdateTime: new Date() },
      { id: 12, chapter: 'chapter 12', UpdateTime: new Date() },
      { id: 13, chapter: 'chapter 13', UpdateTime: new Date() },
      { id: 14, chapter: 'chapter 14', UpdateTime: new Date() },
      { id: 15, chapter: 'chapter 15', UpdateTime: new Date() },
      { id: 16, chapter: 'chapter 16', UpdateTime: new Date() },
      { id: 17, chapter: 'chapter 17', UpdateTime: new Date() },
      { id: 18, chapter: 'chapter 18', UpdateTime: new Date() },
      { id: 19, chapter: 'chapter 19', UpdateTime: new Date() },
      { id: 20, chapter: 'chapter 20', UpdateTime: new Date() },
      { id: 21, chapter: 'chapter 21', UpdateTime: new Date() },
      { id: 22, chapter: 'chapter 22', UpdateTime: new Date() },
      { id: 23, chapter: 'chapter 23', UpdateTime: new Date() },
      { id: 24, chapter: 'chapter 24', UpdateTime: new Date() },
      { id: 25, chapter: 'chapter 25', UpdateTime: new Date() },
      { id: 26, chapter: 'chapter 26', UpdateTime: new Date() },
      { id: 27, chapter: 'chapter 27', UpdateTime: new Date() },
      { id: 28, chapter: 'chapter 28', UpdateTime: new Date() },
      { id: 29, chapter: 'chapter 29', UpdateTime: new Date() },
      { id: 30, chapter: 'chapter 30', UpdateTime: new Date() },
      { id: 31, chapter: 'chapter 31', UpdateTime: new Date() },
      { id: 32, chapter: 'chapter 32', UpdateTime: new Date() },
      { id: 33, chapter: 'chapter 33', UpdateTime: new Date() },
      { id: 34, chapter: 'chapter 34', UpdateTime: new Date() },
      { id: 35, chapter: 'chapter 35', UpdateTime: new Date() },
      { id: 36, chapter: 'chapter 36', UpdateTime: new Date() },
      { id: 37, chapter: 'chapter 37', UpdateTime: new Date() },
      { id: 38, chapter: 'chapter 38', UpdateTime: new Date() },
      { id: 39, chapter: 'chapter 39', UpdateTime: new Date() },
      { id: 40, chapter: 'chapter 40', UpdateTime: new Date() },
      { id: 41, chapter: 'chapter 41', UpdateTime: new Date() },
      { id: 42, chapter: 'chapter 42', UpdateTime: new Date() },
      { id: 43, chapter: 'chapter 43', UpdateTime: new Date() },
      { id: 44, chapter: 'chapter 44', UpdateTime: new Date() },
      { id: 45, chapter: 'chapter 45', UpdateTime: new Date() },
    ],
  },
};
