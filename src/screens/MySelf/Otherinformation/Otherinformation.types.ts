export type UserInformationProps = {
  AboutMe?: string;
  storyFollowed?: number;
  followers?: number;
  bookcase?: number;
};

const userData: UserInformationProps = {
  AboutMe:
    'I`m student from Ukraine. I have been a resident of Atom Space for 4 years now...',
  bookcase: 15,
  storyFollowed: 20,
  followers: 49,
};

export { userData };
