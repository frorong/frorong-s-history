import { json } from '@sveltejs/kit'
import type { BlogType } from '$lib/types'

async function getBlogs() {
  let blogs: BlogType[] = []

  const paths = import.meta.glob(
    '/src/blogs/*.md',
    { eager: true }
  )

  for (const path in paths) {
    const file = paths[path] as any
    const slug = path
      .split('/')
      .at(-1)
      ?.replace('.md', '')

    if (
      file &&
      typeof file === 'object' &&
      slug
    ) {
      const metadata =
        file.metadata as Omit<
          BlogType,
          'slug'
        >
      const blog = {
        ...metadata,
        slug,
      } satisfies BlogType
      blogs.push(blog)
    }
  }

  blogs = blogs.sort(
    (first, second) =>
      new Date(second.date).getTime() -
      new Date(first.date).getTime()
  )

  return blogs
}

export async function GET() {
  const blogs = await getBlogs()
  return json(blogs)
}
