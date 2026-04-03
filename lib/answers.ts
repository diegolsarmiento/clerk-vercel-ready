// lib/answers.ts

import fs from 'fs'
import path from 'path'

const dir = path.join(process.cwd(), 'content/answers')

export function getAllAnswers() {
  const files = fs.readdirSync(dir)

  return files.map((file) => {
    const mdx = require(`@/content/answers/${file}`)
    return mdx.meta
  })
}