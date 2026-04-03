import React from 'react'

const Student = (props) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.course}</p>
    </div>
  )
}

export default Student