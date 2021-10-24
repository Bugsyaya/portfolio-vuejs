import axios from 'axios'

import SECRET from './.secret.json'

let API_URL = 'https://api.github.com/'

const instance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + SECRET.TOKEN}
  });

const fetcher = {
  get: url => instance.get(`${url}`),
  post: (url, data) => instance.post(`${url}`, data)
}

export const getProjects = () => fetcher.get(`users/${SECRET.USER}/repos`).then(response => response.data.filter(p => p.name !== SECRET.USER))
export const getProjectByName = (name) => fetcher.get(`repos/${SECRET.USER}/${name}`)
export const getProjectLanguageByName = (name) => fetcher.get(`repos/${SECRET.USER}/${name}/languages`)
export const getProfil = () => fetcher.get(`users/${SECRET.USER}`)
export const getProfilProject = async () => {
    const profil = await fetcher.get(`repos/${SECRET.USER}/${SECRET.USER}/community/profile`)
    profil.data
    return profil
}

export const loadConfig = async () => {
    const { data } = await axios.get('/static/config.json')
    if (data && data.backend) API_URL = data.backend
    return API_URL
}
