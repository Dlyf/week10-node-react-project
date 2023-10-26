import React, { useEffect, useState } from "react"

import * as APIService from '../services/api';

function GetFurnituresData() {
  const [furnitures, setFurnitures] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await APIService.getFurnitures();
        setFurnitures(response.furnitures)
      } catch (err) {
        setError(err.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <h2>Liste des matières première</h2>
      {furnitures && (
        <>
          <ul>
            {furnitures.map((f, id) => (
              <li key={id}>{f.title}</li>
            ))}
          </ul>
        </>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}


    </>
  );
}

export default GetFurnituresData;
