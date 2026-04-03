import { useParams } from "react-router-dom"



const MainPage = () => {
    let {id} = useParams()
  return (
    <div>
        <h1> current url value is " {id} " </h1>
    </div>
  )
}

export default MainPage
