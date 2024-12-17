/* eslint-disable no-unused-vars */
import React,{useContext, useState} from 'react'
import noteContext from '../../Notes/noteContext'

const About = () => {
    const a=useContext(noteContext).name
    const fun=useContext(noteContext).update
    const [name,setName]=useState(null)
    const [age,setAge]=useState(null)

  return (
    <div>
      hey i am {a.name} and my age is {a.age}
      <section>
        enter your updated name <input type="text" value={name} placeholder='Updated name' onChange={(e)=>{setName(e.target.value)
        fun(e.target.value,a.age)
        }}/>
        <br />
        enter your updated age <input type="text" value={age} placeholder='Updated age' onChange={(e)=>{setAge(e.target.value)
        fun(a.name,e.target.value)
        }}/>
      </section>
    </div>
  )
}

export default About
