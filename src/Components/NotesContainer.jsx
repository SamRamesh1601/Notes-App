import moment from 'moment';
import React from 'react'

const NotesContainer = ({styleView, notesList = []}) => {
  return (
    <>
     <div className={`notes-small-container ${styleView ? 'grid-container' : 'flex-container'}`}>
         {/* <div className="notes-small-container"> */}
      {
          notesList && notesList.map((note,i) => {
              return(
                //     <input className='note-selected-checkbox' type='checkbox' />
                    <div className="note-small-view" key={i}>
                        <div className={`note-view ${styleView ? 'grid-container' : 'flex-container'}`}>
                        <div className="note-head-view">
                            <span className="note-title-text">{note.noteName ? note.noteName : "Untitled"}</span>
                            <span className="note-time-text">{note.createdTime ? moment(note.createdTime).format("HH:mm A") : "12:56 PM"}</span>
                        </div>
                        <div className="note-content-view">
                            {note ? note.noteBody : "Found"}   
                        </div>
                        <div className="note-label-view">
                        {note.noteLabels.map((l,i) => {
                            const active = i === 1;
                            return(
                                <span key={i} onClick={() => setActiveLabel(i)} className={`label-card note-view ${active && 'active'}`}>{l}</span>
                            )
                            })}
                        </div>
                    </div>
                </div>
                )
            })
        }
        </div>
        </>
        )
    }

export default NotesContainer