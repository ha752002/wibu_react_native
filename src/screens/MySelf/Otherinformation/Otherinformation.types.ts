export type UserInformationProps = {
  aboutMe?: string;
  storyPosted?: number;
  followers?: number;
  bookcase?: number;
  selectedContent?: selectedContentType;
};

export type selectedContentType = 'storyPosted' | 'followers' | 'bookcase';

const userData: UserInformationProps = {
  aboutMe:
    'I`m student from Ukraine. I have been a resident of Atom Space for 4 years now...',
  bookcase: 15,
  storyPosted: 20,
  followers: 49,
};

export { userData };
