import http from '@/api/http'

export const findAllCorner = (displayCategorySeq: number) =>
  http.get(`/api/public/display-corners?displayCategorySeq=${displayCategorySeq}`)
