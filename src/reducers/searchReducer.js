const initialState = {
    searched: [],
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_SEARCH":
            return {
                ...state,
                searched: action.payload.searchData
            }
        default:
            return {...state}
    }
}