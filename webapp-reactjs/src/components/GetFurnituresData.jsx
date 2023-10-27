import React, { useEffect, useState } from "react"

import * as APIService from '../services/api';

function GetFurnituresData() {
  const [furnitures, setFurnitures] = useState(null);
  const [error, setError] = useState(null);
  console.log(furnitures)

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
            {furnitures.
// @ts-ignore
            map((f, id) => (
              <>

              <li key={id}> {f.materials.map((material) => (
                <span key={material._id}><p>Matières Premières :</p>{material.name} <br />
                <p>Nom de l'entreprise : </p>{material.company.name}
                </span>

              ))}</li>
            <p>{f.title}</p>

              </>

            ))}
          </ul>
        </>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}


    </>
  );
}

export default GetFurnituresData;
