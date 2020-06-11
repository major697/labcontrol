import axios from 'axios'
import { API } from '@/config/global'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export const autocomplete = word => {
  return axios.get(`nautocomplete/${word}`)
}

export const search = word => {
  return axios.get(`${API}&query=${word}`)
}
