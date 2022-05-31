import { errorPhotos, getPhotos, loadingPhotos } from "../actions/actions"
import { ERROR_PHOTOS, GET_PHOTOS, LOADING_PHOTOS } from "../actions/actionTypes"




const initialState = {
    photos: [],
    loading: false,
    error: null
}




export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_PHOTOS:
            return {
                ...state,
                loading: true
            }
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                loading: false
            }
        case ERROR_PHOTOS:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}




export const loadPhotos = () => {
    return async dispatch => {
        dispatch(loadingPhotos())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await response.json();
            dispatch(getPhotos(data))
        } catch (e) {
            dispatch(errorPhotos(e))
        }
    }
}



