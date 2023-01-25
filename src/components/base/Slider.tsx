import React, { useState } from 'react'
import ReactSlider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled/macro'

const Pagination = styled.div`
  font-family: Montserrat_R;
  font-size: 10px;
  line-height: 16px;
  position: absolute;
  right: 20px;
  bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding: 0 6px;
  color: #fff;
  border-radius: 20px;
  background-color: rgba(17, 17, 17, 0.5);

  & > span {
    margin: 0 3px;
  }
`

interface Props {
  settings?: CustomerSetting
  children: React.ReactNode
}

export interface CustomerSetting extends Settings {
  isPagging?: boolean
  totalCount?: number
}

export const DEFAULT_SETTIMGS: CustomerSetting = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  draggable: true,
  autoplay: false,
  isPagging: false,
  totalCount: 0,
}

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTIMGS, children }) => {
  const [page, setPage] = useState<number>(1)

  return (
    <>
      <ReactSlider
        {...settings}
        afterChange={(index: number) => {
          setPage(index + 1)
        }}
      >
        {children}
      </ReactSlider>
      {settings.isPagging ? (
        <Pagination>
          <span>{page}</span> / {settings.totalCount} <span></span>
        </Pagination>
      ) : null}
    </>
  )
}

export default Slider
