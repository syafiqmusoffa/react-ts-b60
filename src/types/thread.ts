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
    _count: {
      comments: number;
      PostLike: number;
    };
  };
};

export interface ReplyProps {
  id: number;
  username: string;
  body: string;
}
