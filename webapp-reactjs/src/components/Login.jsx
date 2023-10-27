import React, { useState } from "react";

function Login() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)

  function updateField(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

 async function sendForm(event) {
    event.preventDefault();
    // Faire la requete
    // @ts-ignore
    try {
      // @ts-ignore
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // Send data to server
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log('Reponse serveur', data)
    }
    catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <form onSubmit={sendForm}>
        {<div style={{ color: 'red' }}>{error}</div>}
        Email : <input type="text" name="email" onInput={updateField} />
        <br />
        Password : <input type="password" name="password" onInput={updateField} />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login;