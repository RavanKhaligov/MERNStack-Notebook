import { createContext, useState } from "react";
import { getData } from "../services/api";

const NoteContext = createContext()

export const NoteProvider = ({children}) =>{
    const [notes,setNotes] = useState([])
    const [id,setId] = useState('')
    const [loader,setLoader] = useState(false)
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [error,setError] = useState(false)
    const [add,setAdd] = useState(true)

    const updateData = async () =>{
        const notesFromDB = await getData()
        setNotes(notesFromDB)
    }

    return <NoteContext.Provider value={{
        notes,
        setNotes,
        loader,
        setLoader,
        updateData,
        title,
        setTitle,
        description,
        setDescription,
        error,
        setError,
        add,
        setAdd,
        id,
        setId
    }}>
        {children}
    </NoteContext.Provider>
}

export default NoteContext