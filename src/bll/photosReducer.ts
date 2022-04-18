export type photoType = {
    albumId: number,
    id: number,
    url: string,
    thumbnailUrl: string
    title: string
}

 export type initialStateType = {
    photos: Array<photoType> | []
     delay: boolean
}

const initialState = {
    photos: [],
    delay: true
};


export enum actionTypes {
    SET_PHOTOS = 'set-photos',
    FETCH_PHOTOS = 'fetch-photos',
    SET_DELAY = 'set-delay'
}

export const photosReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case actionTypes.SET_PHOTOS:
            return {...state, photos: action.newPhoto};
        case actionTypes.SET_DELAY:
            return {...state, delay: action.delay}
        default:
            return state;
    }
}
export const setPhotoAC = (newPhoto: any) => ({type: actionTypes.SET_PHOTOS, newPhoto} as const)
type SetPhotoACType = ReturnType<typeof setPhotoAC>

export const setDelayAC = (del: boolean) => {
    return {
        type: actionTypes.SET_DELAY,
        delay: del
    } as const
}
type setDelayACType = ReturnType<typeof setDelayAC>


export const fetchPhotosAC = () => ({type: actionTypes.FETCH_PHOTOS})


type ActionsType = SetPhotoACType | setDelayACType
