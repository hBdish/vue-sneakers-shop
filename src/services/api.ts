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
}

export default new SneakersService()
