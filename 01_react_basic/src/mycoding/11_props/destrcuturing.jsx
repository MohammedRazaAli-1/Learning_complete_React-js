import React from 'react'

export const Destrcuturing = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export const Destrcuturing2 = ({name , course}) => {
  return (
    <div>
        <h1>{name}</h1>
        <p>{course} </p>
    </div>
  )
}
