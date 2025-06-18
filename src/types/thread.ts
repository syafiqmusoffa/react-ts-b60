export type ThreadProps = {
  id: number;
  authorId: number;
  content: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    profile: {
      avatarUrl: string;
      username: string;
    };
  };
  _count: {
    comments: number;
    likes: number;
  };
  createdAtFormatted: string
};

export interface ThreadById {
  id: number;
  content: string;
  imageUrl?: string;
  createdAt: string;

  author: {
    id: number;
    profile: {
      username: string;
      name?: string;
      avatarUrl?: string;
    };
    _count: {
      postLike: number;
      comments: number;
    };
  };
}

export interface ReplyProps {
  id: number;
  username: string;
  body: string;
}
