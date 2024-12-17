/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import noteContext from '../../Notes/noteContext'
const Home = () => {
    const globalData=useContext(noteContext).name;
  return (
    <div>
      Welcome {globalData.name},{globalData.age}
    </div>
  )
}

export default Home
