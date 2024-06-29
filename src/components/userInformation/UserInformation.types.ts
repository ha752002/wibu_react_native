export type UserInformationProps = {
  name?: string;
  avatar?: string;
  introduce?: string;
  aboutMe?: string;
  storyPosted?: number;
  followers?: number;
  bookcase?: number;
};

const userData: UserInformationProps = {
  name: 'hoangvip',
  avatar:
    'https://drallen.com.vn/wp-content/uploads/2023/09/chup-anh-dep-khi-di-bien.jpg',
  introduce: 'Stay trending!',
  aboutMe:
    'I`m student from Ukraine. I have been a resident of Atom Space for 4 years now...',
  bookcase: 15,
  storyPosted: 20,
  followers: 49,
};

export { userData };
