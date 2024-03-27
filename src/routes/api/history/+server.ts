import { json } from '@sveltejs/kit'
import type { HistoryType } from '$lib/types'

async function getHistories() {
  let histories: HistoryType[] = []

  const paths = import.meta.glob(
    '/src/histories/*.md',
    { eager: true }
  )

  for (const path in paths) {
    const file = paths[path]
    const slug = path
      .split('/')
      .at(-1)
      ?.replace('.md', '')

    if (
      file &&
      typeof file === 'object' &&
      'metadata' in file &&
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
      console.log(history)
      history.published &&
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
