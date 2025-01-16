

const Button = (props) => {
  const { title } = props.data;

  return (
    <button className="btn btn-primary m-3">{title}</button>
  )
}

export default Button