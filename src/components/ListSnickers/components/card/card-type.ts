interface Card {
  title: string
  imgSnicker: string
  price: number
  isFavorite?: boolean
  isAdded?: boolean
  onClickAdd?: (event: MouseEvent) => void
  onClickFavorite: (event: MouseEvent) => void
}

export type CardProps = Card
