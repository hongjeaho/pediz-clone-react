import { findAllCategory } from './category'
import { useQuery } from 'react-query'
import { AxiosResponse, AxiosError } from 'axios'
import { ListResponse } from '@/types'
import { Category } from '@/types/display'

const useFindAllCategoryByDepth = (depth: number) => {
  const parameters = {
    depth,
    classificationType: 'GENERAL',
  }

  console.dir(parameters)

  return useQuery<AxiosResponse<ListResponse<Category>>, AxiosError>(
    ['findAllCategory', parameters],
    () => findAllCategory(parameters),
  )
}

export { useFindAllCategoryByDepth }
