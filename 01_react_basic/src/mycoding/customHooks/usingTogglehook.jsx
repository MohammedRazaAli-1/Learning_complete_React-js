import useToggle from "./useToggle"

const ToggleExample = () => {

  const [isOn, toggle] = useToggle(false)

  return (
    <div>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default ToggleExample