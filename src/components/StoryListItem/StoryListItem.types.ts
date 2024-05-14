export type StoriesProps = {
  title?: string;
  stories?: IStories[];
};

export interface IStories {
  id: number;
  name?: string;
  author?: string;
  thumbnail?: string;
  // borderColor?: string;
}

export const storiesData: StoriesProps = {
  title: 'Trending Manga',
  stories: [
    {
      id: 1,
      name: 'Sousou No Frieren',
      author: 'Tác giả 1',
      thumbnail: 'https://cdnnvd.com/nettruyen/thumb/sousou-no-frieren.jpg',
    },
    {
      id: 2,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
    },
    {
      id: 3,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
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
    },

    {
      id: 2,
      name: 'Tồn Tại Như Một Nữ Hầu',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/ton-tai-nhu-mot-nu-hau.jpg',
    },
    {
      id: 3,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
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
    },

    {
      id: 2,
      name: 'Bậc Thầy Thiết Kế Điền Trang',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/bac-thay-thiet-ke-dien-trang.jpg',
    },
    {
      id: 3,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
    },
    {
      id: 4,
      name: 'Tồn Tại Như Một Nữ Hầu',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/ton-tai-nhu-mot-nu-hau.jpg',
    },
    {
      id: 5,
      name: 'Triệu Hồi Đến Thế Giới Fantasy',
      author: 'Tác giả 2',
      thumbnail:
        'https://cdnnvd.com/nettruyen/thumb/trieu-hoi-den-the-gioi-fantasy.jpg',
    },
  ],
};
