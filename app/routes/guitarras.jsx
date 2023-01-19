import {   Outlet, useOutletContext } from '@remix-run/react'
import styles from '~/styles/guitarras.css'

export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]

}

const Tienda = () => {

  return (
    <main className='contenedor'>
  
    <Outlet
    context={useOutletContext()}
    ></Outlet>

    </main>

    
  )
}

export default Tienda