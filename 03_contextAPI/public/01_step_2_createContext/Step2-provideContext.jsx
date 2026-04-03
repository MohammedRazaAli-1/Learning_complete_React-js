import { UserContext } from "./Step1-createContext"

import Profile from "./Step3-consumeContext"

function App() {
  const user = "Raza"

  return (
    <UserContext.Provider value={user}>
      <Profile  />
    </UserContext.Provider>
  )
}

export default App