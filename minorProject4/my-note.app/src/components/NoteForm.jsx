import { useEffect, useState } from "react";

function NoteForm({
  addNote,
  editingNote,
  updateNote,
  goBack
}) {

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");


  // Load selected note

  useEffect(() => {

    if (editingNote) {

      setTitle(editingNote.title);

      setContent(editingNote.content);

    }

  }, [editingNote]);


  const handleSubmit = (e) => {

    e.preventDefault();


    if (
      title.trim() === "" ||
      content.trim() === ""
    ) {

      alert("Please enter title and note");

      return;

    }


    if (editingNote) {

      updateNote(title, content);

    } else {

      addNote(title, content);

    }


    setTitle("");

    setContent("");

  };


  return (

    <main className="note-page">

      <button
        className="back-btn"
        onClick={goBack}
      >
        ← Back
      </button>


      <div className="note-form">

        <h2>
          {editingNote
            ? "Edit Note ✏️"
            : "Create New Note ✨"}
        </h2>


        <input

          type="text"

          placeholder="Note heading..."

          value={title}

          onChange={(e) =>
            setTitle(e.target.value)
          }

        />


        <textarea

          placeholder="Write your note here..."

          value={content}

          onChange={(e) =>
            setContent(e.target.value)
          }

        ></textarea>


        <button
          className="save-btn"
          type="submit"
          onClick={handleSubmit}
        >

          {editingNote
            ? "Update Note"
            : "Save Note"}

        </button>

      </div>

    </main>

  );

}

export default NoteForm;