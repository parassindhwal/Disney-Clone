// import axios from "axios";
import { instance } from "../util";

export const loadGenres = (fetchURL) => async (dispatch) => {
    //FETCH AXIOS
    const genreData = await instance.get(fetchURL);

    dispatch({
        type: "FETCH_GENRES",
        payload: {
            genres: genreData.data.genres,
        }
    })
}