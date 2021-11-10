const initialState = {
    genre: [],
}

export const genreReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_GENRES":
            return {
                ...state,
                genre: action.payload.genres
            }
        default:
            return {...state}
    }
}