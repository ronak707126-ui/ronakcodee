function NoteCard({
  note,
  deleteNote,
  editNote
}) {

  return (

    <div className="note-card">

      <div className="note-top">

        <span className="note-icon">
          📌
        </span>

        <h3>
          {note.title}
        </h3>

      </div>


      <p>
        {note.content}
      </p>


      <small>
        🕒 {note.date}
      </small>


      <div className="note-buttons">

        <button
          className="edit-btn"
          onClick={() => editNote(note)}
        >
          ✏️ Edit
        </button>


        <button
          className="delete-btn"
          onClick={() =>
            deleteNote(note.id)
          }
        >
          🗑️ Delete
        </button>

      </div>

    </div>

  );

}

export default NoteCard;