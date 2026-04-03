import React from 'react'
import realUseFetch from './realuseFetch'
const Real_fetch_usecase = () => {

    const {loading , error , users} = realUseFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div><h1>{loading}</h1></div>
  )
}

export default Real_fetch_usecase