import React, { useEffect, useState } from "react"

function App() {
  const [serverData, setServerData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        // @ts-ignore
        const response = await fetch(import.meta.env.VITE_SERVER_URL + "/furnitures");
        const data = await response.json();
        setServerData(data);
      }
      catch (err) {
        setError(err.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="colorTitle">Hello world</h1>
      {/* <p>Message de l&apos;API :</p> */}

      {serverData && <pre>{JSON.stringify(serverData, null, 2)}</pre>}
      {error && <div className="errorMessage">{error}</div>}

    </>
  )
}

export default App;
