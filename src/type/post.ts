export type PostDto = {
  id: number;
  title: string;
};

export type PostWithContentDto = PostDto & {
    content: string;
};

export type PostCommentDto = {
    id: number;
    createDate: string;
    modifyDate: string;
    content: string;
};