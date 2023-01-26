import http from '@/api/http'

export const findAllCategory = (params: object) =>
  http.get(`/api/public/display-categories`, { params })
