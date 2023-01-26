import React from 'react'
import styled from '@emotion/styled/macro'
import TopCorner from '@/components/main/TopCorner'
import { useFindAllCorner } from '@/api/display/useCornerApiHook'
import CategorySection from '@/components/main/CategorySection'

const Base = styled.div``

interface Props {}

const Main: React.FC<Props> = () => {
  const { data, isLoading } = useFindAllCorner(7)

  return (
    <Base>
      <TopCorner
        data={data?.data.payload.filter(item => item.seq === 7)[0]}
        isLoading={isLoading}
      />
      <CategorySection />
    </Base>
  )
}

export default Main
