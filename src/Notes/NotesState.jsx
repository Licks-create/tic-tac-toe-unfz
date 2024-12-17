/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react'
import noteContext from './noteContext'
// const noteContext=createContext()
const NotesState = (props) => {
    const state={
        name:"vivek",
        age:12
    } 
    const [name,setName]=useState(state)
    const update=(name,age)=>{
        setName({name,age})
    }
  return (
    <noteContext.Provider value={{name,update}}  >
      {props?.children}
    </noteContext.Provider>
  )
}

export default NotesState
