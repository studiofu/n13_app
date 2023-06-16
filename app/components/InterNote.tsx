'use client';
import useNote from '../hooks/useNote'

const InterNote = () => {
    
    const {notes, addNote, removeNote} = useNote()

    return (
        <div className='
        flex
        flex-col
      '>
        {notes.map((note, index) => (
          <div key={index} className='
            flex
            flex-row
          '>
            <p
              className='
                p-2
                m-2
              '
            >{note}</p>
            <button onClick={() => removeNote(note)}>remove</button>
          </div>
            ))
        }
      </div>
    )
}

export default InterNote;