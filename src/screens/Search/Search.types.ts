import { IGenre } from '../../screens/Manga/StoryDetails/Genres/Genres.types';

export type SearchProps = {
  // story: IStories;
  trendingKeywords: string[];
  genres: IGenre[];
};

export const SearchData: SearchProps = {
  genres: [
    {
      id: 1,
      genre: 'Action',
      AgeWarning: false,
      describe:
        'Thể loại này chứa đựng những cảnh hành động nghẹt thở và kịch tính, thường có các pha rượt đuổi, chiến đấu, và những màn trình diễn võ thuật.',
    },
    {
      id: 2,
      genre: 'Adventure',
      AgeWarning: false,
      describe:
        'Mang đến những câu chuyện phiêu lưu mạo hiểm qua các vùng đất mới lạ, khám phá thế giới và tìm kiếm kho báu.',
    },
    {
      id: 3,
      genre: 'Comedy',
      AgeWarning: false,
      describe:
        'Nhấn mạnh vào hài hước và tiếu lâm, thể loại này tạo ra tiếng cười và niềm vui thông qua tình huống và nhân vật.',
    },
    {
      id: 4,
      genre: 'Drama',
      AgeWarning: false,
      describe:
        'Tập trung vào những mối quan hệ phức tạp và cảm xúc sâu sắc, drama thường khai thác các chủ đề nghiêm túc và tình cảm.',
    },
    {
      id: 5,
      genre: 'Fantasy',
      AgeWarning: false,
      describe:
        'Thể loại này đưa người xem vào thế giới của ma thuật và siêu nhiên, nơi mà mọi điều kỳ diệu đều có thể xảy ra.',
    },
    {
      id: 6,
      genre: 'Horror',
      AgeWarning: true,
      describe:
        'Nhằm tạo ra cảm giác sợ hãi và kinh dị, horror chứa đựng các yếu tố ma quái và rùng rợn.',
    },
    {
      id: 7,
      genre: 'Mystery',
      AgeWarning: false,
      describe:
        'Với các bí ẩn cần được giải quyết, thể loại này thu hút người xem bằng cách tạo ra sự tò mò và muốn khám phá.',
    },
    {
      id: 8,
      genre: 'Psychological',
      AgeWarning: true,
      describe:
        'Khám phá sâu vào tâm lý nhân vật, psychological thường có cốt truyện phức tạp và nhiều lớp nghĩa.',
    },
    {
      id: 9,
      genre: 'Romance',
      AgeWarning: false,
      describe:
        'Xoay quanh câu chuyện tình yêu và mối quan hệ giữa các nhân vật, romance mang lại cảm xúc ngọt ngào và lãng mạn.',
    },
    {
      id: 11,
      genre: 'Sci-Fi',
      AgeWarning: false,
      describe:
        'Thể loại khoa học viễn tưởng khám phá những khả năng của khoa học và công nghệ trong tương lai hoặc các thế giới khác.',
    },
    { id: 12, genre: 'Slice of Life' },
    { id: 13, genre: 'Sports' },
    { id: 14, genre: 'Supernatural' },
    { id: 15, genre: 'Thriller' },
    { id: 16, genre: 'Historical' },
    { id: 17, genre: 'Martial Arts' },
    { id: 18, genre: 'Mechgenre: a' },
    { id: 19, genre: 'Music' },
    { id: 20, genre: 'Shounen' },
    { id: 21, genre: 'Shoujo' },
    { id: 22, genre: 'Josei' },
    { id: 23, genre: 'Seinen' },
    { id: 24, genre: 'School Life' },
    { id: 25, genre: 'Tragedy' },
    { id: 26, genre: 'Harem' },
    { id: 27, genre: 'Isekai' },
    { id: 28, genre: 'Magic' },
    { id: 29, genre: 'Military' },
    { id: 30, genre: 'Post-Apocalyptic' },
    { id: 31, genre: 'Steampunk' },
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
