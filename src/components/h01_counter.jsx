import React from 'react'
import { useCounter01 } from '../hooks/useCounter01'

//! Ejemplo de  midudev
export const H01_counter = () => {
  // data que recuperamos del hook
  const {contador, incrementar, decrementar, resetear} = useCounter01()
  const contador_B = useCounter01(10);

  return (
    <>
      <div className="container">
        {/* CONTADOR A */}
        <div className="row">
          <div className="d-flex justify-content-center">
            <h3 className='my-2'>{contador}</h3>
          </div>
          <div className="d-flex justify-content-around">
            <button
              onClick={incrementar}
              className='btn btn-primary'
            > Incrementar
            </button>

            <button
              onClick={decrementar}
              className='btn btn-primary'
            > Decrementar
            </button>

            <button
              onClick={resetear}
              className='btn btn-primary'
            > Resetear
            </button>
          </div>
        </div>

        {/* CONTADOR B */}
        <div className="row">
          <div className="">
            <h3 className='my-2'>{contador_B.contador}</h3>
            <button className='btn btn-primary m-2' onClick={contador_B.incrementar}>Incrementar</button>
            <button className='btn btn-primary m-2'onClick={contador_B.decrementar} >Decrementar</button>
            <button className='btn btn-primary m-2' onClick={contador_B.resetear} >Resetear</button>
          </div>
        </div>
      </div>
    </>
  )
}
