// Create action creator

export const selectedSongAction = (song) => {
    //Return action
    return {
        type: "SELECT_SONG",
        payload: song
    }
}