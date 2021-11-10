import { fetchSearch, instance } from "../util";

export const searchMovies = (movie) => async (dispatch) => {
    //FETCH AXIOS
    const searchedData = await instance.get(fetchSearch(movie));
    console.log(searchedData)

    dispatch({
        type: "FETCH_SEARCH",
        payload: {
            searchData: searchedData.data.results,
        }
    })
}

export const searchById = (id) => async (dispatch) => {
    const searchByIdData = await instance.get(fetchSearch(id));
    console.log(searchByIdData)

    // dispatch({
    //     type: "FETCH_ID_DETAIL",
    //     payload: {
    //         searchData: searchedData.data.results,
    //     }
    // })
}