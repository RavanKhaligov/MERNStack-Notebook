import React, { useContext } from 'react'
import {MdOutlineClear} from "react-icons/md"
import { deleteData } from '../services/api'
import NoteContext from '../context/NoteContext'
import {GrEdit} from "react-icons/gr"

const NoteDetail = ({note}) => {

  const {updateData,setLoader,setTitle,setDescription,setAdd,setId} = useContext(NoteContext)

  const noteDataCreated = new Date(note.createdAt)
  const noteDataUpdated = new Date(note.updatedAt)
  const handleDelete = async id =>{
    setLoader(true)
    try{
      await deleteData(id)
      await updateData()
    }catch (err){
      console.log(err)
    }finally{
      setLoader(false)
    }
  } 
  const handleClick = () =>{
    setId(note._id)
    setTitle(note.title)
    setDescription(note.description)
    setAdd(false)
  }

  return (
    <div className='note-detail'>
      <h4 className='w'>{note.title}</h4>
      <p className='w'>{note.description}</p>
      <p className='w'>Created at: {`${noteDataCreated.getDate()}-${noteDataCreated.getMonth()}-${noteDataCreated.getFullYear()} ${noteDataCreated.getHours()}:${noteDataCreated.getMinutes()}:${noteDataCreated.getSeconds()}`}</p>
      <p className='w'>Updated at: {`${noteDataUpdated.getDate()}-${noteDataUpdated.getMonth()}-${noteDataUpdated.getFullYear()} ${noteDataUpdated.getHours()}:${noteDataUpdated.getMinutes()}:${noteDataUpdated.getSeconds()}`}</p>
      <span 
        onClick={() => handleDelete(note._id)} 
        className='delete'>
        <MdOutlineClear/> 
      </span>
      <span 
        onClick={handleClick} 
        className='edit'>
        <GrEdit/>
      </span>
    </div>
  )
}

export default NoteDetail