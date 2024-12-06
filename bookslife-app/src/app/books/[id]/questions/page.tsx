'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const questions = [
  { id: 1, text: '주인공의 이름은 무엇인가요?' },
  { id: 2, text: '이야기의 배경은 어디인가요?' },
  { id: 3, text: '이 책에서 가장 인상 깊었던 부분은 무엇인가요?' },
];

export default function QuestionsPage() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const router = useRouter();

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('제출된 답변:', answers);
    // 여기에 답변을 처리하는 로직을 추가할 수 있습니다.
    router.push('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">질문에 답해보세요</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {questions.map((question) => (
          <div key={question.id}>
            <label className="block mb-2 font-semibold">{question.text}</label>
            <textarea
              className="w-full p-2 border rounded"
              rows={3}
              value={answers[question.id] || ''}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          답변 제출하기
        </button>
      </form>
    </div>
  );
}
