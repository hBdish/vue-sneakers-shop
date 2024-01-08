import type { InjectionKey } from 'vue'
import type { Sneaker } from '@/types/sneakers'

const createInjectionKeyForAction = <T, V = void>(key: string) => {
  const Key: InjectionKey<(event: T) => V> = Symbol(key)
  return Key
}

const createInjectionKeyForProperty = <T>(key: string) => {
  const Key: InjectionKey<T> = Symbol(key)
  return Key
}

const ChangeDrawerOpenKey: InjectionKey<(event: Event) => void> = Symbol('changeDrawerOpenKey')
const AddToBasketKey = createInjectionKeyForAction<Sneaker, (event: Event) => void>(
  'AddToBasketKey'
)

const BasketItemsKey = createInjectionKeyForProperty<Sneaker[]>('BasketItems')

export { AddToBasketKey, ChangeDrawerOpenKey, BasketItemsKey }
