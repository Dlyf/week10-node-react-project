import React, { useState } from "react";

function FormAddMaterial() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)

  function updateField(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

//  async function sendForm(event) {
//     event.preventDefault();
//     // Faire la requete
//     // @ts-ignore
//     try {
//       // @ts-ignore
//       const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         // Send data to server
//         body: JSON.stringify(formData)
//       })
//       const data = await response.json()
//       console.log('Reponse serveur', data)
//     }
//     catch (err) {
//       setError(err.message);
//     }
//   }

  return (
    <>
    <h2>hello world</h2>
      {/* <form onSubmit={sendForm}>

        <button type="submit">Login</button>
      </form> */}
    </>
  )
}

export default FormAddMaterial;