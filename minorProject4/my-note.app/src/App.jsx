import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  const [notes, setNotes] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editingNote, setEditingNote] = useState(null);

  const [search, setSearch] = useState("");


  // LOAD NOTES

  useEffect(() => {

    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }

  }, []);


  // SAVE NOTES

  useEffect(() => {

    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );

  }, [notes]);


  // ADD NOTE

  const addNote = (title, content) => {

    const newNote = {

      id: Date.now(),

      title: title,

      content: content,

      date: new Date().toLocaleString()

    };

    setNotes((oldNotes) => [
      ...oldNotes,
      newNote
    ]);

    setShowForm(false);
  };


  // DELETE NOTE

  const deleteNote = (id) => {

    setNotes((oldNotes) =>
      oldNotes.filter(
        (note) => note.id !== id
      )
    );

  };


  // EDIT NOTE

  const editNote = (note) => {

    setEditingNote(note);

    setShowForm(true);

  };


  // UPDATE NOTE

  const updateNote = (title, content) => {

    setNotes((oldNotes) =>
      oldNotes.map((note) => {

        if (note.id === editingNote.id) {

          return {

            ...note,

            title: title,

            content: content,

            date: new Date().toLocaleString()

          };

        }

        return note;

      })
    );

    setEditingNote(null);

    setShowForm(false);

  };


  // SEARCH

  const filteredNotes = notes.filter((note) =>
    note.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (

    <div className="app">

      <Navbar
        search={search}
        setSearch={setSearch}
      />


      {showForm ? (

        <NoteForm

          addNote={addNote}

          editingNote={editingNote}

          updateNote={updateNote}

          goBack={() => {

            setShowForm(false);

            setEditingNote(null);

          }}

        />

      ) : (

        <main className="home">

          <h2>My Notes</h2>

          <p className="subtitle">
            Keep your ideas organized ✨
          </p>


          <button
            className="add-note-btn"
            onClick={() => setShowForm(true)}
          >

            <span>＋</span>

            Add New Note

          </button>


          <NotesList

            notes={filteredNotes}

            deleteNote={deleteNote}

            editNote={editNote}

          />

        </main>

      )}


      <Footer />

    </div>

  );

}

export default App;