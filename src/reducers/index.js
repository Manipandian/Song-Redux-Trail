import { combineReducers } from "redux";


const songsReducer = () => {
    return [
        {title: "Amma amma" , duration: "4:25"},
        {title: "Mersal Arasan" , duration: "2:05"},
        {title: "Aaathadi enna odambu" , duration: "3:55"},
        {title: "Neeyum Naanum anbe" , duration: "5:25"}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SELECT_SONG") {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})