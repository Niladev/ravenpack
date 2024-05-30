export interface JSONPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface JSONComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
