export type Status =
  | 'PENDING'
  | 'DOCUMENTS_PASSED'
  | 'DOCUMENTS_FAILED'
  | 'INTERVIEW_PASSED'
  | 'FINALLY_PASSED'

export interface HistoryType {
  companyName: string
  description?: string
  date: Date
  id: number
  status: Status
  slug: string
  published: boolean
}
