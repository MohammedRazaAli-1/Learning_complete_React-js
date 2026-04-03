

const Card = ({title , desc , color}) => {
  return (
    <div>
        <h1 style={{backgroundColor : color}}>{title}</h1>
        <p>{desc}</p>

    </div>
  )
}

export default Card