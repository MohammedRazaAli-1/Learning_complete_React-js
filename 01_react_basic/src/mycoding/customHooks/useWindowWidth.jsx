
import { useState, useEffect } from "react"
const useWindowWidth = () => {
    const [ width , setWidth] = useState(window.innerWidth)

    useEffect( ()=>{
        const handleWidh = () =>{
            setWidth(window.innerWidth)

        }
        window.addEventListener('resize' , handleWidh)

        return  () =>  {removeEventListener( 'resize' , handleWidh)}
    } , [])
    return width
}

export default useWindowWidth