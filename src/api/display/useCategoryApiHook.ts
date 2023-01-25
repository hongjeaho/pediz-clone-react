import { findAllCategory } from './category'
import { useQuery } from 'react-query'
import { AxiosResponse, AxiosError } from 'axios'
import { ListResponse } from '@/types'
import { Category } from '@/types/display'

const useFindAllCategory = (categorySeq: number) =>
  useQuery<AxiosResponse<ListResponse<Category>>, AxiosError>(
    ['findAllCategory', categorySeq],
    () => findAllCategory(categorySeq),
  )

export { useFindAllCategory }
