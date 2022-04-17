type initialStateType = {
    //TODO: fix later according task requirements
    photos: Array<any>
}

const initialState = {
    photos: [1,2,3,4],
};


enum actionTypes {
    SET_PHOTOS ='set-photos'
}

export const photosReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case actionTypes.SET_PHOTOS:
            return { ...state, photos: action.newPhoto };
        default:
            return state;
    }
}
export const setPhotoAC = (newPhoto: any) => ({type: actionTypes.SET_PHOTOS, newPhoto} as const)
type SetPhotoACType = ReturnType<typeof setPhotoAC>

type ActionsType = SetPhotoACType
