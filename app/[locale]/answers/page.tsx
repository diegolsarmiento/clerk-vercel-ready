// app/[locale]/answers/page.tsx

import Link from 'next/link'
import { getAllAnswers } from '@/lib/answers'

export default function AnswersPage() {
  const items = getAllAnswers()

  return (
    <div className="space-y-6 text-black">
      {items.map((item) => (
        <Link key={item.slug} href={`/en/answers/${item.slug}`}>
          <div className="border p-4 rounded">
            <div className="text-sm opacity-60">{item.updatedAt}</div>
            <div className="font-medium">{item.question}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}