import type { BlogType } from '$lib/types'

export async function load({
  fetch,
}: {
  fetch: any
}) {
  const response =
    await fetch('api/blog')
  const blogs: BlogType[] =
    await response.json()
  return { blogs }
}
