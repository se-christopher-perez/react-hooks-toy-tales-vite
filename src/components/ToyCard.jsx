import React from "react";

function ToyCard({ toy, deleteToy, updateToy }) {

  function handleDelete(){

    fetch(`http://localhost:3001/toys/${toy.id}`, {

      method: "DELETE",
    })
    .then(r => {

      if(!r.ok) {throw new Error("ERROR")}

      return r.json()

    })
    .then(() => {

      deleteToy(toy)

    })
    .catch(err => console.log(err))

  }

  function handleLike(){

    const newLikes = toy.likes + 1

    console.log(toy.id)

    fetch(`http://localhost:3001/toys/${toy.id}`, {

      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        likes: newLikes
      })

    })
    .then(r => {

      if(!r.ok) {throw new Error("ERROR")}

      return r.json()

    })
    .then(updatedToy => updateToy(updatedToy))
    .catch(err => console.log(err))

  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike} >Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
