import http from '@/api/http'

export const findAllCategory = (categorySeq: number) =>
  http.get(`/api/public/display-categories/${categorySeq}?keyType=SEQUENCE`)
