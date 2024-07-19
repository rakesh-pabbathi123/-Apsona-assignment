import React from "react";
import NotesList from "./components/NotesList";
import "./App.css";

const App = () => {
  return (
    <div id="app">
      <h1>Keep Notes App</h1>
      <NotesList />
    </div>
  );
};

export default App;
