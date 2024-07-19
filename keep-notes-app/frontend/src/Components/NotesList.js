import React, { Component } from "react";
import { getNotes } from "../api";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = async () => {
    const notesData = await getNotes();
    this.setState({ notes: notesData });
  };

  render() {
    return (
      <div id="notes">
        {this.state.notes.map((note) => (
          <div key={note.id} className="note">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default NotesList;
