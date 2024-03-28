import { error } from '@sveltejs/kit'

export async function load() {
  try {
    const about = await import(
      `../../constant/about/about.md`
    )

    return {
      content: about.default,
    }
  } catch (e) {
    throw error(404, `Could not find `)
  }
}
