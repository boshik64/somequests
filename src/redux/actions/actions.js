import { ERROR_PHOTOS, GET_PHOTOS, LOADING_PHOTOS } from "./actionTypes";



export const getPhotos = (data) => ({
    type: GET_PHOTOS,
    payload: data
})

export const loadingPhotos = () => ({
    type: LOADING_PHOTOS
})

export const errorPhotos = (error) => ({
    type: ERROR_PHOTOS,
    payload: error
})