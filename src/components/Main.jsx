import { useState } from "react"

import Button from "./partials/button"
import languages from "../assets/languages"
import Description from "./partials/Description"



const Main = () => {
  const [selectedId, setSelectedId] = useState(2)



  return (
    <>
      <section id="buttons" className="d-flex justify-content-center">
        {languages.map(item => (
          <Button key={`btn-${item.id}`} data={item} onClick={() => setSelectedId(item.id)} />
        ))}

      </section>

      <section id="description" className="d-flex justify-content-center col-5 mx-auto">
        <div className="alert alert-light">
          <h5>{languages.find(item => item.id == selectedId).title}</h5>
          <p>{languages.find(item => item.id == selectedId).description}</p>
        </div>

      </section>


    </>
  )
}

export default Main