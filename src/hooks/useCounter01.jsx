import React, { useState } from 'react'

export const useCounter01 = ( initialValue = 0) => {
  const [contador, setContador] = useState(initialValue);

  const incrementar = () => setContador(contador +1);
  const decrementar = () => setContador(contador -1);
  const resetear = () => setContador(0);

  return {
    contador, incrementar, decrementar, resetear
  }
}
