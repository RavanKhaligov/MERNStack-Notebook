import React, { useContext, useEffect, useState } from 'react'
import NoteDetail from '../components/NoteDetail'
import NoteForm from '../components/NoteForm'
import Loader from '../components/Loader'
import NoteContext from '../context/NoteContext'

const Home = () => {
  const {notes,loader,setLoader,updateData} = useContext(NoteContext)


  useEffect(() =>{
    (async () =>{
      setLoader(true)
      try{
        await updateData()
      }catch(err){
        console.log(err)
      }finally{
        setLoader(false)
      }
    })()

  },[])

  return (
    <div className='home'>
      <div className='note-form'>
        <NoteForm/>
      </div>
      <div className="notes">
        {notes && notes.map(note => (
          <NoteDetail key={note._id} note={note}/>
        ))}
      </div>
      {loader && <Loader/>}
    </div>
  )
}

export default Home