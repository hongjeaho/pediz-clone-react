import React from 'react'
import styled from '@emotion/styled/macro'
import Slider, { DEFAULT_SETTIMGS } from '@components/base/Slider'
import { Link } from 'react-router-dom'
import { Settings } from 'react-slick'

const Base = styled.section`
  position: relative;

  .slick-list {
    height: 66.6666666667vw;
    overflow: hidden;
  }
`

const StyleLink = styled(Link)`
  flex: none;
  cursor: pointer;
  text-decoration: underline;
`
const Content = styled.figure`
  display: flex;
  align-items: center;
  width: 100vw;
  max-height: 150vw;
  margin: 0;
`

const Image = styled.img`
  width: 100%;
  vertical-align: middle;
`

interface Props {}

const settings: Settings = {
  ...DEFAULT_SETTIMGS,
  autoplay: true,
  autoplaySpeed: 3000,
}

const TopCorner: React.FC<Props> = () => {
  return (
    <Base>
      <Slider settings={settings}>
        <StyleLink to={'/'}>
          <Content>
            <Image src="/images/@thumb/main_720x720_01.jpg" alt="" />
          </Content>
        </StyleLink>
        <StyleLink to={'/'}>
          <Content>
            <Image src="/images/@thumb/main_720x720_02.jpg" alt="" />
          </Content>
        </StyleLink>
        <StyleLink to={'/'}>
          <Content>
            <Image src="/images/@thumb/main_720x720_03.jpg" alt="" />
          </Content>
        </StyleLink>
        <StyleLink to={'/'}>
          <Content>
            <Image src="/images/@thumb/main_720x720_04.jpg" alt="" />
          </Content>
        </StyleLink>
      </Slider>
    </Base>
  )
}

export default TopCorner
