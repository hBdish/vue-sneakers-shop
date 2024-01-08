import axios from 'axios'
import type { Sneaker } from '@/types/sneakers'
import { Sort } from '@/types/sort'

class SneakersService {
  URL = 'http://localhost:1234'

  async getSneakers(params?: { sortBy?: Sort; search?: string }): Promise<Sneaker[]> {
    try {
      const { data } = await axios.get<Sneaker[]>('http://localhost:1234/items', {
        params: {
          _sort: params?.sortBy,
          q: params?.search
        }
      })
      return data
    } catch (e) {
      console.log(e)
      return []
    }
  }

  async getFavoriteSneakers(): Promise<Sneaker[]> {
    try {
      const { data } = await axios.get<Sneaker[]>('http://localhost:1234/favorites')
      return data
    } catch (e) {
      console.log(e)
      return []
    }
  }

  async postFavoriteSneakers(id: string) {
    try {
      await axios.post(
        'http://localhost:1234/favorites',
        {
          id: id
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
    } catch (e) {
      console.log(e)
    }
  }

  async deleteFavoriteSneakers(id: string) {
    try {
      await axios.delete('http://localhost:1234/favorites/' + id)
    } catch (e) {
      console.log(e)
    }
  }
}

export default new SneakersService()
