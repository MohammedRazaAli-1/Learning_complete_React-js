// Create a component that:
// Stores:
// const price = 500
// const discount = 100
// Displays
// Original Price
// Discount
// Final Price (price - discount)
// Final price must be calculated inside JSX using {}.



export const Problem2 = () => {
    const price = 500
    const discount = 100
  return (
    <div>
        <p> Original Price : {price}</p>
        <p> Discount : {discount}</p>
        <p>Final Price : {price - discount}</p>
    </div>
  )
}
