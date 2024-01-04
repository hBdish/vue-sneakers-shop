interface Card {
  title: string
  imgSnicker: string
  price: number
  isFavorite?: boolean
  isAdded?: boolean
  onClickAdd: (payload: MouseEvent) => void
  onClickFavorite: (payload: MouseEvent) => void
}

export type CardProps = Card
