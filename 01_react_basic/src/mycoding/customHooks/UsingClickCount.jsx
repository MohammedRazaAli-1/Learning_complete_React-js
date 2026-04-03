import useClickCount from "./useClickCount"



const UsingClickCount = () => {
    let countNo = useClickCount()
  return (
    <div>
        <h1>click count : {countNo}</h1>

    </div>
  )
}

export default UsingClickCount