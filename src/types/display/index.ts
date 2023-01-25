import { Goods } from '@/types/goods'

export interface Corner {
  seq: number
  displayCategorySeq: number
  name: string
  desc: string
  banners?: Banner[]
  goods?: Goods[]
}

export interface Banner {
  seq: number
  cornerSeq: number
  typeCode: string
  title: string
  desc: string
  imagePath: string
  linkType: string
  linkUrl: string
}

export interface Category {
  seq: number
  upperCategorySeq: number
  categoryCode: string
  typeCode: string
  name: string
  depth: string
  display: string
  used: boolean
  leaf: boolean
  priority: number
  sortCode: string
  categoryLink: string
  targetSeq: number
  iconClassName: string
}
