import {SET_FAVORITES_TO_PERSON,REMOVE_FAVORITES_FROM_PERSON} from '@store/constance/actionsTypes'


export const setPersonToFavorite = (data) => ({
            type: SET_FAVORITES_TO_PERSON,
            payload: data
})

export const removePersonFromFavorite = (id) => ({
    type: REMOVE_FAVORITES_FROM_PERSON,
    payload: id
})