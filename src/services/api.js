import md5 from 'md5'
import {
  API_MARVEL_API_URL,
  API_MARVEL_PRIVATE_KEY,
  API_MARVEL_PUBLIC_KEY,
  API_URL_CHARACTERS,
} from '../utils/constants'
/**
 * see: https://developer.marvel.com/documentation/authorization
 */
export async function getCharacters() {
  const ts = Date.now()
  const hash = md5(ts + API_MARVEL_PRIVATE_KEY + API_MARVEL_PUBLIC_KEY)
  const url = `${API_MARVEL_API_URL}${API_URL_CHARACTERS}?ts=${ts}&apikey=${API_MARVEL_PUBLIC_KEY}&hash=${hash}&limit=10`
  try {
    const response = await fetch(url)
    const data = await response.json()
    if (data.code === 200) {
      return data.data.results
    } else {
      return []
    }
  } catch (error) {
    console.log(`Error consultando el api:${url} : `, error)
  }
}
