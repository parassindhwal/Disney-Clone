import { combineReducers } from "redux";
import { genreReducer } from "./genreReduce";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
    genre: genreReducer,
    searched: searchReducer
});

export default rootReducer;