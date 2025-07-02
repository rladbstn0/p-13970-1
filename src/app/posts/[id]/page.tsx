"use client";

import { use, useEffect, useState } from "react";

export default function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  const [post, setPost] = useState<{
    id: number;
    title: string;
    content: string;
  } | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);
  }, []);

  if (post == null) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <h1>글 상세페이지</h1>

      {post != null && (
        <>
          <div>번호 : {post.id}</div>
          <div>제목: {post.title}</div>
          <div style={{ whiteSpace: "pre-line" }}>{post.content}</div>
        </>
      )}
    </>
  );
}