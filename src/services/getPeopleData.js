import { GUIDE_IMG_EXTENSION, GUIDE_URL_IMG_PEOPLE } from '@constants/swapi'
import { HTTPS, SWAPI_ROOT, SWAPI_PEOPLE } from '@constants/swapi'

const getId = (url, category) => {
    const id = url
        .replace(HTTPS + SWAPI_ROOT + category, '')
        .replace(/\//g, '')

    return id
}

export const makeConcurrentRequeat = async (url) => {
    const res = await Promise.all(url.map(link => {
        return fetch(link).then(res => res.json())
    }))

    return res
}


export const getPeopleId = url => { return getId(url, SWAPI_PEOPLE) }
export const getPeopleImg = id => `${GUIDE_URL_IMG_PEOPLE}/${id + GUIDE_IMG_EXTENSION}`
