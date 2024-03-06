import React, {Component} from "react";
import gql from "graphql-tag";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {content: ''};
  }

  onSubmit(event) {
    event.preventDefault();


  }
  render() {
    return (
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input
            value={this.state.content}
            onChange={event => this.setState({content: event.target.value})}
          />
        </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID){
      id
      lyrics {
        content
      }
    }
  }
`

export default LyricCreate;