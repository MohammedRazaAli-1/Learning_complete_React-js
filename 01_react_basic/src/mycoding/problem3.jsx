// Create a component:
// const isLoggedIn = true
// If true → show:
// Welcome Raza
// If false → show:
// Please Login
// Use ternary operator inside JSX.

const Problem3 = () => {
    const isLoggedIn = true
    const username = "Raza"
  return (
    <div>
        {isLoggedIn ? <h1>Welcome {username}</h1> : <h1>Please login</h1>}
    </div>
  )
}

export default Problem3