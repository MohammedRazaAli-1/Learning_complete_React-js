import React, { useEffect, useState } from 'react'

const ClearUseofuseEffect = () => {
    let [count1 , setCount1] =useState(0);
    let[ count2 , setCount2] = useState(10)
    let [text , setText] = useState("hello");
    useEffect( ()=>{
    console.log( count1 , "rendered .... again " );
    } , [count1])

    useEffect( ()=>{
    console.log( "text changed... " );
    } , [text])
    
  return (
    <>
    <h1>
        {count1}
        <br />
        {count2}
        <br />
        {text}
        <br />
    </h1>
    <button  onClick={() => setCount1(count1 + 1 )}> increase 1st count</button>
    <button onClick={() =>setCount2(count2 - 1 )}>decrease 2nd count</button>
    <button onClick={() =>{setText("hello react "  +  count1)}} >change text </button>
    </>
  )
}

export default ClearUseofuseEffect