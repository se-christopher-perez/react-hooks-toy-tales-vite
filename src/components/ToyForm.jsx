import React, { useState } from "react";

function ToyForm({ toys, setToys }) {

  const [newToy, setNewToy] = useState({

    "name": "",
    "image": "",
    "likes": 0

  })

  function handleSubmit(e) {

    e.preventDefault()

    fetch("http://localhost:3001/toys", {

      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newToy)
    })
      .then(r => {

        if (!r.ok) { throw new Error("Error") }

        return r.json()

      })
      .then((newToy) => {

        setToys([...toys, newToy])

      })

  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newToy.name}
          onChange={(e) => setNewToy({ ...newToy, "name": e.target.value })}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newToy.image}
          onChange={(e) => setNewToy({ ...newToy, "image": e.target.value })}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
