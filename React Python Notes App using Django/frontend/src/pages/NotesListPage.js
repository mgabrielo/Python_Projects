import React, { useEffect, useState } from 'react'
import Listitem from '../components/ListItem'
import AddButton from '../components/AddButton'


const NotesListPage = () => {
    let [notes, setNotes] = useState([])
    useEffect(() => {
        getNotes()
    }, [])


    let getNotes = async () => {
        let response = await fetch('/api/notes/');
        let data = await response.json();
        console.log(data)
        setNotes(data);
    }




    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
            <div className='notes-list'>
                <div className='scrollarea-content'>
                    {notes.map((note, index) => (
                        <Listitem key={index} note={note} />
                    ))}
                </div>
            </div>
            <AddButton />
        </div>
    )
}

export default NotesListPage