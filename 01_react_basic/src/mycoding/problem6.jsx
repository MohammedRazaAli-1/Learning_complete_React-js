// Create a component:
// Create an array:
// const fruits = ["Apple", "Banana", "Mango", "Orange"]
// Render all fruits using .map()
// Show them inside <li> inside <ul>
// Use proper key
// Write full component.

const Problem6 = () => {
    const fruits = ["Apple", "Banana", "Mango", "Orange"]
  return (
    <div>
        <ul> 
            {fruits.map((fruit , key) =>{return(<li key={key}>{fruit}</li>)})}  // with return 

            {fruits.map( (a , index) => <li key={index}> {a}</li>)}  //without return 
        </ul>
    </div>
  )
}

export default Problem6