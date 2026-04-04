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
export default async function AnswerPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>
}) {
  const { slug } = await params

  const Content = (await import(`@/content/answers/${slug}.mdx`)).default

  return (
    <div className="prose prose-invert max-w-none text-black">
      <Content />
    </div>
  )
}