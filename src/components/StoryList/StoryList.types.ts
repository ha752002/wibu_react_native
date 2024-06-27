import { SortType } from '~/navigators/ApplicationcNavigator/ApplicationNavigator.types';
import { IStoryInformation } from '../../screens/Manga/StoryDetails/Information/Information.types';

export type StoriesProps = {
  title?: string;
  stories?: IStoryInformation[];
  viewType?: viewType;
  more?: number;
  Sort?: SortType;
  ratings?: number;
  fullScreen?: boolean;
};

export type viewType = 'column' | 'grid' | 'row' | 'ratings';

export const storiesData: StoriesProps = {
  title: 'Trending Manga',
  stories: [
    {
      id: 1,
      name: 'Sousou No Frieren',
      thumbnail:
        'https://i.pinimg.com/564x/b0/2e/66/b02e668dc3f8a9ed5847b13c97678fc0.jpg',
      author: 'Tác giả 1',
      created: new Date(),
    },
    {
      id: 2,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',

      thumbnail:
        'https://i.pinimg.com/564x/f9/3f/e7/f93fe796a286813003c114ca3411c972.jpg',
      author: 'Tác giả 2',
      status: 'Full',
    },
    {
      id: 3,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      thumbnail:
        'https://i.pinimg.com/564x/b6/6c/69/b66c69a0d44065230b206237a33b0a9a.jpg',
      author: 'Tác giả 3',
    },
    {
      id: 4,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      thumbnail:
        'https://i.pinimg.com/564x/b6/6c/69/b66c69a0d44065230b206237a33b0a9a.jpg',
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
      thumbnail:
        'https://i.pinimg.com/564x/b0/2e/66/b02e668dc3f8a9ed5847b13c97678fc0.jpg',
      author: 'Tác giả 1',
      views: 100000,
    },
    {
      id: 2,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',

      thumbnail:
        'https://i.pinimg.com/564x/f9/3f/e7/f93fe796a286813003c114ca3411c972.jpg',
      author: 'Tác giả 2',
    },
    {
      id: 3,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      thumbnail:
        'https://i.pinimg.com/564x/b6/6c/69/b66c69a0d44065230b206237a33b0a9a.jpg',
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
      thumbnail:
        'https://i.pinimg.com/564x/b0/2e/66/b02e668dc3f8a9ed5847b13c97678fc0.jpg',

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
        'https://i.pinimg.com/564x/b6/6c/69/b66c69a0d44065230b206237a33b0a9a.jpg',
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
        'https://i.pinimg.com/564x/f9/3f/e7/f93fe796a286813003c114ca3411c972.jpg',
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
        'https://i.pinimg.com/564x/f9/3f/e7/f93fe796a286813003c114ca3411c972.jpg',
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
