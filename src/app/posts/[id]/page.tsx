"use client";

import { apiFetch } from "@/lib/backend/client";
import type { PostWithContentDto } from "@/type/post";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";



export default function Page({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);  
  const router = useRouter();

  const [post, setPost] = useState<PostWithContentDto | null>(null);

  const deletePost = (id: number) => {
    apiFetch(`/api/v1/posts/${id}`, {
      method: "DELETE",
    }).then((data) => {
      alert(data.msg);
      router.replace("/posts");
    });
  };

  useEffect(() => {
    apiFetch(`/api/v1/posts/${id}`).then(setPost);


  }, []);

  if (post == null) return <div>로딩중...</div>;

  return (
    <>
      <h1>글 상세페이지</h1>

      <div>번호 : {post.id}</div>
      <div>제목: {post.title}</div>
      <div style={{ whiteSpace: "pre-line" }}>{post.content}</div>

      <div className="flex gap-2">
        <button
          className="p-2 rounded border"
          onClick={() => 
            confirm(`${post.id}번 글을 삭제하시겠습니까?`) && deletePost(post.id)}
        >
          삭제
        </button>
        <Link className="p-2 rounded border" href={`/posts/${post.id}/edit`}>
          수정
        </Link>
      </div>
    </>
  );
}