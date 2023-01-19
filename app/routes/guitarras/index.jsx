import { useLoaderData  } from '@remix-run/react'

import {getGuitarras } from '~/model/guitarras.server'
//import  Guitarra  from '~/components/guitarra'
import Listadosguitarras from '~/components/listados-guitarras'


export function meta(){
  return{
    title: 'GuitarraLA - Tienda de Guitarras',
    description: 'GuitarraLA - Nuestrac Coleccion de guitarras'

  }
}


export async function loader(){

 // console.log('resultado',resultado)
 const guitarras = await getGuitarras()

  return guitarras.data
}


const Tienda = () => {

  const guitarras = useLoaderData()
 // console.log(guitarras)


  return ( 
    <Listadosguitarras
    guitarras={guitarras}
    >

    </Listadosguitarras>
    
  )
}

export default Tienda