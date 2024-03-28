import { error } from '@sveltejs/kit'

interface Params {
  slug: string
}

export async function load({
  params,
}: {
  params: Params
}) {
  try {
    const about = await import(
      '../../constant/about/about.md'
    )

    return {
      content: about.default,
      meta: about.metadata,
    }
  } catch (e) {
    throw error(
      404,
      `Could not find ${params.slug}`
    )
  }
}
