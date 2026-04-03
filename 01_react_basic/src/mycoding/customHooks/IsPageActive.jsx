import UsePageFocus from "./usePageFocus"

const IsPageActive = () => {
    let checkActive = UsePageFocus()
  return (
    <div>
        {checkActive ? "page is active " : "page is not active "}
    </div>
  )
}

export default IsPageActive