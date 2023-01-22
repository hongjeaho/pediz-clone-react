import React from 'react'
import styled from '@emotion/styled/macro'
import TopCorner from '@/components/main/TopCorner'

const Base = styled.div``

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <Base>
      <TopCorner />
    </Base>
  )
}

export default Main
