import React from "react";
import { connect } from "react-redux";
import { selectedSongAction } from "../actions";

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                         onClick={() => this.props.selectedSongAction(song)}
                         className="ui button primary"
                         >Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }

}

// To assign store required value into props. run every time state update take place
const mapStateToProps = state => {
    return { songs: state.songs };

}

// By passing action creator as a second argument we can access that function frm this.props and also it get connected with reducer
export default connect(mapStateToProps, {
    selectedSongAction: selectedSongAction
})(SongList);