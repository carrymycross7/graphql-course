import React, {Component} from "react";
import gql from "graphql-tag";
import {graphql} from "react-apollo";
import {Link} from "react-router";
import query from '../queries/fetchSongs';
import {id} from "html-webpack-plugin/lib/chunksorter";

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({ variables: { id } })
            .then(() => this.props.data.refetch());
    }
    renderSongs() {
        return this.props.data.songs.map(song => {
            return (
                <li className="collection-item" key={song.id}>
                    {song.title}
                    <i
                      className="material-icons"
                      onClick={()=> this.onSongDelete(song.id)}
                    >delete</i>
                </li>
            )
        })
    }
    render() {
        if (this.props.data.loading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <ul className="collection">
                    {this.renderSongs()}
                </ul>
                <Link
                    to="/songs/new"
                    className="btn-floating btn-large red right"
                >
                <i className="material-icons">add</i>
                </Link>
            </div>
        )
    }
}

const deleteMutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;


export default graphql(deleteMutation) (
    graphql(query)(SongList)
);
