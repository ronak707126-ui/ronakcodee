import NoteCard from "./NoteCard";

function NotesList({
  notes,
  deleteNote,
  editNote
}) {

  return (

    <div className="notes-list">

      {notes.length === 0 ? (

        <div className="empty-notes">

          <div className="empty-icon">
            📝
          </div>

          <h3>
            No Notes Found
          </h3>

          <p>
            Create your first note!
          </p>

        </div>

      ) : (

        notes.map((note) => (

          <NoteCard

            key={note.id}

            note={note}

            deleteNote={deleteNote}

            editNote={editNote}

          />

        ))

      )}

    </div>

  );

}

export default NotesList;