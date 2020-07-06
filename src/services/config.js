import axios from 'axios'

export const htt = axios.create({
    baseURL: 'http://localhost:7170/'
})