// Create a component:
// Box
// It should show a bordered container.
// Example style:
// border: 2px solid black
// padding: 20px
// Usage
// <Box>
//   <h1>React Learning</h1>
//   <p>Children props are powerful</p>
// </Box>
// The Box component should render whatever is inside using:
// props.children

// import Box from "./12box"
import {Destrcuturing} from "./destrcuturing"


const Problem12 = () => {
  return (
    <div>
        <Destrcuturing>
            <h1>React Learning </h1>
            <p>children props are powerfull .... </p>
        </Destrcuturing>

    </div>
  )
}

export default Problem12