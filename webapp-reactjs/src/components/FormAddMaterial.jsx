import React, { useState } from "react";
import * as APIService from '../services/api';

function FormAddMaterial() {

  const [furnitures, setFurnitures] = useState({title:"", category:"Armoire"})
  const [error, setError] = useState(null)

  async function sendForm(event) {
    event.preventDefault();
    try {
      const response = await APIService.postFurnitures(furnitures);
      const data = await response.json();
      console.log(data)
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
    <h2>hello world</h2>
     <form onSubmit={sendForm}>
     <label>Catégorie:
          <select onChange={(e)=> setFurnitures({...furnitures, ["category"] : e.currentTarget.value})} name="category">
            <option value="Armoire">Armoire</option>
            <option value="Étagère">Étagère</option>
          </select>
        </label>
        {/* {<div className="errorMessage">{error}</div>} */}
        title : <input onChange={(e) => setFurnitures({...furnitures, ["title"] : e.currentTarget.value})} type="text" name="title" />
        <br />

        <br />
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default FormAddMaterial;