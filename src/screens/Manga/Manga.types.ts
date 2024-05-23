import { IStories } from '../../components/Story/Story.types';

export type MangaProps = {
  story: IStories;
};

export const story: MangaProps = {
  story: {
    id: 1,
    name: 'Sousou No Frieren',
    author: 'Tác giả 1',
    thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',
    introduce:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie est nec gravida dictum. Nunc dictum lectus quam, non maximus urna ornare sit amet. Aliquam id sapien in massa commodo volutpat vel vitae quam. dictum lectus quam, non maximus urna ornare sit amet. Aliquam id sapien in massa commodo volutpatc tum lectus quam, non ma.',
    genres: ['Fiction', 'Fantasy', 'Magic', 'Fiction', 'Fantasy', 'Magic'],
    chapters: [
      'chapter 1',
      'chapter 2',
      'chapter 3',
      'chapter 4',
      'chapter 5',
      'chapter 6',
      'chapter 7',
      'chapter 8',
    ],
  },
};
