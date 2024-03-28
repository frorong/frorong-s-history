import { json } from '@sveltejs/kit'
import type { HistoryType } from '$lib/types'

async function getHistories() {
  let histories: HistoryType[] = []

  const paths = import.meta.glob(
    '/src/constant/histories/*.md',
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
          HistoryType,
          'slug'
        >
      const history = {
        ...metadata,
        slug,
      } satisfies HistoryType
      histories.push(history)
    }
  }

  histories = histories.sort(
    (first, second) =>
      new Date(second.date).getTime() -
      new Date(first.date).getTime()
  )

  return histories
}

export async function GET() {
  const histories = await getHistories()
  return json(histories)
}
