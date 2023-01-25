export interface ListResponse<T> {
  message: string
  succeeded: boolean
  payload: T[]
}
