import React, {Component} from "react";
import {graphql} from "react-apollo";
import fetchSong from '../queries/fetchSong';
import {Link} from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
    render() {
        const {song} = this.props.data;
        // handle if data is ready or not
        if (!song) {return <div>Loading...</div>}
        return (
            <div>
                <Link to='/'>Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics}/>
                <LyricCreate songId={song.id}/>
            </div>
        )
    }
}

export default graphql(fetchSong, {
    options: (props) => {
        return {variables:{id:props.params._id}}}
})(SongDetail);