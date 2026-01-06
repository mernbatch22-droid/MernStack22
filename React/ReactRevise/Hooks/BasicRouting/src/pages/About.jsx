import React from 'react'
import { useParams } from 'react-router-dom'

function About() {

  const parameter=useParams();
  console.log(parameter)
  return (
    <div>About</div>
  )
}

export default About