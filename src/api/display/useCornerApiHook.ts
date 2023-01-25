import { findAllCorner } from './corner'
import { useQuery } from 'react-query'
import { AxiosResponse, AxiosError } from 'axios'
import { ListResponse } from '@/types'
import { Corner } from '@/types/display'

const useFindAllCorner = (displayCategorySeq: number) =>
  useQuery<AxiosResponse<ListResponse<Corner>>, AxiosError>(
    ['findAllCorner', displayCategorySeq],
    () => findAllCorner(displayCategorySeq),
  )

export { useFindAllCorner }
