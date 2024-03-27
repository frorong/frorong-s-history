export type Status =
  | 'PENDING'
  | 'DOCUMENTS_PASSED'
  | 'DOCUMENTS_FAILED'
  | 'INTERVIEW_PASSED'
  | 'INTERVIEW_FAILED'
  | 'FINALLY_PASSED'

export interface HistoryType {
  companyName: string
  description?: string
  date: string
  id: number
  status: Status
  slug: string
}
