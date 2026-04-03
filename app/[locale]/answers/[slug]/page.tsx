// app/[locale]/answers/[slug]/page.tsx

import fs from 'fs'
import path from 'path'

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/answers')
  const files = fs.readdirSync(dir)

  return files.map((file) => ({
    slug: file.replace('.mdx', ''),
  }))
}

export default async function AnswerPage({ params }: any) {
  const { slug } = params

  const Content = (await import(`@/content/answers/${slug}.mdx`)).default

  return (
    <div className="prose">
      <Content />
    </div>
  )
}