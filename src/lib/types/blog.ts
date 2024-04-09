export type CategoryType =
  | '전체'
  | 'CS'
  | 'JS'
  | 'React'
  | 'Svelte'
  | 'TS'
  | 'FE'
  | 'NEXT'

export interface BlogType {
  id: number
  title: string
  description: string
  date: string
  slug: string
  category: CategoryType
}
