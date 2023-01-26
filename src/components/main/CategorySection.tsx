import styled from '@emotion/styled/macro'
import React from 'react'
import { useFindAllCategoryByDepth } from '@/api/display/useCategoryApiHook'
import { Link } from 'react-router-dom'
import { Category } from '@/types/display/index'

import { ReactComponent as CategoryFood } from '@/assets/icon/category-food.svg'
import { ReactComponent as CategoryHealth } from '@/assets/icon/category-health.svg'
import { ReactComponent as CategoryMore } from '@/assets/icon/category-more.svg'
import { ReactComponent as CategorySnackCat } from '@/assets/icon/category-snack-cat.svg'
import { ReactComponent as CategorySnackDog } from '@/assets/icon/category-snack-dog.svg'
import { ReactComponent as CategorySuppliesCat } from '@/assets/icon/category-supplies-cat.svg'
import { ReactComponent as CategorySuppliesDog } from '@/assets/icon/category-supplies-dog.svg'

const Base = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 22px 32px;
`
const StyleLink = styled(Link)`
  font-family: Spoqa_Han_Sans_Neo_M;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #111;
  text-decoration: none;
  cursor: pointer;
`

interface Props {
  category: Category
}

const CategoryIcon: React.FC<Props> = ({ category }) => {
  return (
    <>
      {category.categoryCode === '1000001001' ? <CategoryFood width={36} height={36} /> : null}
      {category.categoryCode === '1000002001' ? <CategoryFood width={36} height={36} /> : null}
      {category.categoryCode === '1000001002' ? <CategoryHealth width={36} height={36} /> : null}
      {category.categoryCode === '1000002002' ? <CategoryHealth width={36} height={36} /> : null}
      {category.categoryCode === '1000001003' ? <CategorySnackDog width={36} height={36} /> : null}
      {category.categoryCode === '1000002003' ? <CategorySnackCat width={36} height={36} /> : null}
      {category.categoryCode === '1000001004' ? (
        <CategorySuppliesDog width={36} height={36} />
      ) : null}
      {category.categoryCode === '1000002004' ? (
        <CategorySuppliesCat width={36} height={36} />
      ) : null}
      <span>{category.name}</span>
    </>
  )
}

const CategorySection: React.FC = () => {
  const { data, isLoading } = useFindAllCategoryByDepth(2)
  return (
    <Base>
      {isLoading || !data ? (
        <>Loading...</>
      ) : (
        data.data.payload
          .filter(category => category.upperCategorySeq === 3)
          .slice(0, 4)
          .map(category => (
            <StyleLink to={'/'} key={category.seq}>
              <CategoryIcon category={category} />
            </StyleLink>
          ))
      )}
      <StyleLink to={'/'}>
        <CategoryMore width={36} height={36} />
        <span>더보기</span>
      </StyleLink>
    </Base>
  )
}

export default CategorySection
