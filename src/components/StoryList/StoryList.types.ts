import { IStories } from '../Story/Story.types';

export type StoriesProps = {
  title?: string;
  stories?: IStories[];
  viewType?: viewType;
};

export type viewType = 'column' | 'grid' | 'row';

export const storiesData: StoriesProps = {
  title: 'Trending Manga',
  stories: [
    {
      id: 1,
      name: 'Sousou No Frieren',
      author: 'Tác giả 1',
      thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',
      genres: [''],
    },
    {
      id: 2,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
      genres: [''],
    },
    {
      id: 3,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
      genres: [''],
    },
    {
      id: 4,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
      genres: [''],
    },
  ],
};

export const storiesData2: StoriesProps = {
  title: 'new',
  stories: [
    {
      id: 1,
      name: 'Sousou No Frieren',
      author: 'Tác giả 1',
      thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',
      genres: [''],
    },

    {
      id: 2,
      name: 'Tồn Tại Như Một Nữ Hầu',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/ton-tai-nhu-mot-nu-hau.jpg',
      genres: [''],
    },
    {
      id: 3,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
      genres: [''],
    },
  ],
};

export const following: StoriesProps = {
  title: 'Mangastory is following',
  stories: [
    {
      id: 1,
      name: 'Sousou No Frieren',
      author: 'Tác giả 1',
      thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',
      chapter: 23,
      views: 121212,
      genres: [''],
    },

    {
      id: 2,
      name: 'Bậc Thầy Thiết Kế Điền Trang asa sấ',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
      genres: [''],
    },
    {
      id: 3,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
      genres: [''],
    },
    {
      id: 4,
      name: 'Tồn Tại Như Một Nữ Hầu',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/ton-tai-nhu-mot-nu-hau.jpg',
      genres: [''],
    },
    {
      id: 5,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
      genres: [''],
    },
  ],
};

export const emptyList: StoriesProps = {
  title: 'bookcase',
  stories: [],
};
