import Button from "./partials/button"
import languages from "../assets/languages"



const Main = () => {
  return (
    <>
      <section id="buttons" className="d-flex justify-content-center">
        {languages.map(item => (
          <Button key={item.id} data={item} />
        ))}

      </section>

      <section id="description">

      </section>


    </>
  )
}

export default Main