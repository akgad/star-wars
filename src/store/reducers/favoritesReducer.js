import { omit } from 'lodash'

import {SET_FAVORITES_TO_PERSON,REMOVE_FAVORITES_FROM_PERSON} from '@store/constance/actionsTypes'

import {getLocalItems} from '@utils/localStorage'


const initialState = getLocalItems('store')

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITES_TO_PERSON:
            return {
                ...state,
                ...action.payload
            }
    
        case REMOVE_FAVORITES_FROM_PERSON:
            return omit(state,[action.payload])
            
        default: return state;
    }
}   

export default favoritesReducer