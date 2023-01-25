import React from 'react'
import styled from '@emotion/styled/macro'
import Slider, { DEFAULT_SETTIMGS, CustomerSetting } from '@components/base/Slider'
import { Link } from 'react-router-dom'
import { Banner, Corner } from '@/types/display'

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

interface Props {
  data?: Corner
  isLoading: boolean
}

const settings: CustomerSetting = {
  ...DEFAULT_SETTIMGS,
  autoplay: true,
  autoplaySpeed: 3000,
  isPagging: true,
}

const TopCorner: React.FC<Props> = ({ data, isLoading }) => {
  settings.totalCount = data?.banners?.length
  return (
    <Base>
      <Slider settings={settings}>
        {isLoading || !data ? (
          <>Loading..</>
        ) : (
          data.banners?.map((item: Banner) => (
            <StyleLink to={'/'} key={item.seq}>
              <Content>
                <Image
                  src={`${process.env.REACT_APP_IMAGE_URL}/${item.imagePath}`}
                  alt={item.title}
                />
              </Content>
            </StyleLink>
          ))
        )}
      </Slider>
    </Base>
  )
}

export default TopCorner
