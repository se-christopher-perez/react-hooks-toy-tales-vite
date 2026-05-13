import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {

    fetch("http://localhost:3001/toys")
    .then(r => {

      if(!r.ok) {throw new Error("ERROR: No fetch!")}

      return r.json()

    })
    .then(data => {

      console.log(data)
      setToys(data)

    })
    .catch(err => { console.log(err) })

  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
