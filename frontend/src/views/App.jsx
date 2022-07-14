import React from 'react'
import { useState } from '@hookstate/core';
import { listaDesplegables } from '../store/store';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function App() {

  const listasDesplegables = useState(listaDesplegables);

  listasDesplegables.get().ciudades.map(e => console.log(e))

  return (
    <>
      {
        listasDesplegables.get().ciudades.map(e =>
          <button
            key={e}
            className='font-bold text-2xl border-2 rounded-full bg-yellow-300 text-green-800 py-2 px-10 hover:shadow-lg hover:shadow-green-500 duration-700'>{e}</button>
        )
      }
      <Link to={"/prueba"}>
        <Button >prueba</Button>
      </Link>
    </>
  )
}
