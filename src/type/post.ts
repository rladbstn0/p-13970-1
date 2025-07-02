export type PostDto = {
  id: number;
  title: string;
};

export type PostWithContentDto = PostDto & {
    content: string;
};