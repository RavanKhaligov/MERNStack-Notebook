export const getData = async () =>{
    const response = await fetch("/api/notes")
    const data = await response.json()
    
    if(response.ok){
        return data
    }
}

export const postData = async note =>{
    const response = await fetch("/api/notes",{
        method:"POST",
        body:JSON.stringify(note),
        headers:{
            "Content-Type":"application/json"
        }
    })
    const data = await response.json()
    if(!response.ok){
        return data.error
    }
    else{
        return ''
    }
}

export const deleteData = async id =>{
    const response = await fetch(`/api/notes/${id}`,{
        method:"DELETE"
    })
}

export const patchData = async (id,note) =>{
    const response = await fetch(`/api/notes/${id}`,{
        method:"PATCH",
        body:JSON.stringify(note),
        headers:{
            "Content-Type":"application/json"
        }
    })
}