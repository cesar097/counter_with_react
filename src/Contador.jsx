import React, { useEffect, useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

 

  return (
    <div className="mainContainer">
      <h1>Contador: {counter}</h1>
      <button className="botonSuma"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>

      <button className="botonResta"  onClick={() => {
                  if (counter > 0) {
                      setCounter(counter - 1);
                  }
              }}     >
        Restar
      </button>


      <button className="botonCero"
        onClick={() => {
          setCounter(0);
        }}
      >
        Restablecer
      </button>
    </div>
  );
}
