import { SortType } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';
import { IStoryInformation } from '../../screens/Manga/StoryDetails/Information/Information.types';

export type StoriesProps = {
  title?: string;
  stories?: IStoryInformation[];
  viewType?: viewType;
  more?: number;
  Sort?: SortType;
};

export type viewType = 'column' | 'grid' | 'row';

export const storiesData: StoriesProps = {
  title: 'Trending Manga',
  stories: [
    {
      id: 1,
      name: 'Sousou No Frieren',
      thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',
      author: 'Tác giả 1',
      created: new Date(),
    },
    {
      id: 2,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',

      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
      author: 'Tác giả 2',
      status: 'Full',
    },
    {
      id: 3,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
      author: 'Tác giả 3',
    },
    {
      id: 4,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
      author: 'Tác giả 3',
    },
  ],
};

export const storiesData2: StoriesProps = {
  title: 'new',
  stories: [
    {
      id: 1,
      name: 'Sousou No Frieren',
      thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',
      author: 'Tác giả 1',
      views: 100000,
    },
    {
      id: 2,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',

      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
      author: 'Tác giả 2',
    },
    {
      id: 3,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
      author: 'Tác giả 3',
    },
  ],
};

export const following: StoriesProps = {
  title: 'Mangastory is following',
  stories: [
    {
      id: 1,
      name: 'Sousou No Frieren',
      thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',

      author: 'Tác giả 3',
      chapter: 23,
      views: 0,
      created: new Date(),
      status: 'Updating',
    },

    {
      id: 2,
      name: 'Bậc Thầy Thiết Kế Điền Trang asa sấ',

      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
      author: 'Tác giả 3',
      chapter: 23,
      views: 0,
      created: new Date(-40),
      status: 'Halt',
    },
    {
      id: 3,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
      author: 'Tác giả 3',
      chapter: 23,
      views: 121212,
      created: new Date(),
      status: 'Updating',
    },
    {
      id: 4,
      name: 'Tồn Tại Như Một Nữ Hầu',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/ton-tai-nhu-mot-nu-hau.jpg',
      author: 'Tác giả 3',
      chapter: 23,
      views: 0,
      created: new Date(),
      status: 'Halt',
    },
    {
      id: 5,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',

      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
      author: 'Tác giả 3',
      chapter: 23,
      views: 121212,
      created: new Date(),
      status: 'Full',
    },
  ],
};

export const emptyList: StoriesProps = {
  title: 'bookcase',
  stories: [],
};
