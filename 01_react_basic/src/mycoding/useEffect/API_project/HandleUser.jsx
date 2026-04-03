import React from 'react'

const HandleUser = (props) => {
  return (
    <div>
        <h1> name : {props.name}</h1>
        <h2>username : {props.username}</h2>
        <h3>email : {props.email}</h3>
        <p>address :{props.address.city}</p>
        <b>phone : {props.phone}</b>
        <h2>company : {props.company.name}</h2>
    </div>
  )
}

export default HandleUser
