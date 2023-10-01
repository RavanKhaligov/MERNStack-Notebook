import React, { useContext, useEffect } from 'react'
import {patchData, postData } from '../services/api'
import NoteContext from '../context/NoteContext'

const NoteForm = () => {

    const {updateData,setLoader,title,setTitle,description,setDescription,error,setError,add,setAdd,id,setId} = useContext(NoteContext)


    useEffect(() =>{
        setTimeout(() =>{
            setError('')
        },1000)
    },[error])
    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            const note = {title,description}
            if(add){
                await postData(note)
                .then(err=>{
                    if(!err){
                        setTitle('')
                        setDescription('')
                        setLoader(true)
                    }
                    setError(err)
                })
            }else{
                await patchData(id,note)
                setTitle('')
                setDescription('')
                setAdd(true)
                setId('')
            }
            await updateData()
        }catch(err){
            console.log(err)
        }finally{
            setLoader(false)
        }

    }
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a new note</h3>
        <div className='create-group'>
            <div>
                <label>Title</label>
                <input 
                    type="text" 
                    onChange={e => setTitle(e.target.value)} 
                    value={title}
                />
            </div>
            <div>
                <label>Description</label>
                <input 
                    type="text" 
                    onChange={e => setDescription(e.target.value)} 
                    value={description}
                />
            </div>
        </div>
        <button type='submit'>{ add ? `Add` : `Save` }</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default NoteForm