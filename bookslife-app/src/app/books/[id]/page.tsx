'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const books = [
  {
    id: 1,
    title: '어린 왕자',
    author: '앙투안 드 생텍쥐페리',
    description: '어린 왕자는 철학적인 동화로...',
  },
  {
    id: 2,
    title: '해리 포터와 마법사의 돌',
    author: 'J.K. 롤링',
    description: '해리 포터는 마법사의 세계에서...',
  },
  {
    id: 3,
    title: '모모',
    author: '미하엘 엔데',
    description: '모모는 시간을 훔치는 회색 신사들로부터...',
  },
];

export default function BookPage() {
  const { id } = useParams();
  const bookId = typeof id === 'string' ? parseInt(id) : NaN;
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return <div>책을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
      <p className="text-xl mb-2">저자: {book.author}</p>
      <p className="mb-4">{book.description}</p>
      <Link
        href={`/books/${book.id}/questions`}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        읽기 완료 및 질문 답하기
      </Link>
    </div>
  );
}
