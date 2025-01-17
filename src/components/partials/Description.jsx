
const Description = (props) => {
  const { title, description } = props.data
  return (
    <div className="alert alert-light">
      <h5>{title}</h5>
      <p>{description}</p>

    </div>
  )
}

export default Description