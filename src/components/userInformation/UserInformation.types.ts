export type UserInformationProps = {
  name?: string;
  avatar?: string;
  introduce?: string;
  AboutMe?: string;
  storyFollowed?: number;
  followers?: number;
  bookcase?: number;
};

const userData: UserInformationProps = {
  name: 'hoangvip',
  avatar:
    'https://drallen.com.vn/wp-content/uploads/2023/09/chup-anh-dep-khi-di-bien.jpg',
  introduce: 'Stay trending!',
  AboutMe:
    'I`m student from Ukraine. I have been a resident of Atom Space for 4 years now...',
  bookcase: 15,
  storyFollowed: 20,
  followers: 49,
};

export { userData };
