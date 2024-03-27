import type { HistoryType } from '$lib/types'

export async function load({
  fetch,
}: {
  fetch: any
}) {
  const response = await fetch(
    'api/history'
  )
  const histories: HistoryType[] =
    await response.json()
  return { histories }
}
