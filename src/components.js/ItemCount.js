import React, { useState, useEffect } from 'react';



/*let producto = [
    {stock: 10}
]

function calculo() {
    return producto[0] - 1
}
  
function calculomas(){
    return producto[0] + 1
}
*/

// console.log(calculo)

export default function ItemCount({ desde }) {
  const [x, setX] = useState(1);

    console.log('render');

    if (x >= 10) {
      alert('Ya no queda stock! :(');
      setX(1)
    }

    if (x <= 0) {
      alert('Valor inválido: cero o menos! Contador restablecido!');
      setX(1)
    }

  // Calculos
    
  return (
    <>
      <div>
        Cantidad: {x}
        <br />
        <button
          onClick={() => {
            /* x = x + 1; */
            setX(x + 1);
          }}
        >
          Sumar
        </button>
        <button
          onClick={() => {
            //calculo();
            //console.log(producto[0])
            setX(x - 1);
          }
        }
        
        >
          Restar
        </button>
      </div>
    </>
  );
}