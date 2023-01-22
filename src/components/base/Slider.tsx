import React from 'react'
import ReactSlider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from '@emotion/styled/macro'

const StyleSlider = styled(ReactSlider)``

interface Props {
  settings?: Settings
  children: React.ReactNode
}

export const DEFAULT_SETTIMGS: Settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true,
  draggable: true,
  autoplay: false,
}

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTIMGS, children }) => {
  return <StyleSlider {...settings}>{children}</StyleSlider>
}

export default Slider
