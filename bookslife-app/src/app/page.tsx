import Link from 'next/link';

const books = [
  { id: 1, title: '어린 왕자', author: '앙투안 드 생텍쥐페리' },
  { id: 2, title: '해리 포터와 마법사의 돌', author: 'J.K. 롤링' },
  { id: 3, title: '모모', author: '미하엘 엔데' },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">책 목록</h2>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id} className="border p-4 rounded-lg">
            <Link
              href={`/books/${book.id}`}
              className="text-blue-600 hover:underline"
            >
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
