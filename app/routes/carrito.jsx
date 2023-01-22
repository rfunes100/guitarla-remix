
import {  useEffect, useState } from 'react' 


import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/carrito.css'


export function links() {
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]

}

export function meta() {
  return {
    title: 'GuitarLA - Carrito de Compras',
    descripcion: 'venta de guitarras, musica, blog, carrito de compras, tienda'
  }
}

function Carrito() {


  const [ total ,setTotal ] = useState(1000)
  const { carrito , actualizarcantidad  } = useOutletContext()

  
  
  useEffect(() => {
  //  const calcultotala = carrito.reduce( (total , producto) => total + (producto.cantidad * producto.precio ), 0 )
  const calcultotala = 15
    console.log('calcultotala',calcultotala)
  setTotal(calcultotala)
    return () => {
    //  const calcultotala = carrito.reduce( (total , producto) => total + (producto.cantidad * producto.precio ), 0 )
    const calcultotala = 15
      console.log('calcultotala', calcultotala)
  //    const calcultotal = carrito.reduce( (total , producto) => total + (producto.cantidad * producto.precio ), 0 )
      setTotal(calcultotala)
    }
  }, [setTotal, carrito]  )
  

  return (
   <main className="contenedor" >
    <h1 className="heading">arrito de compras</h1>
    <div className="contenido">
      <div className='carrito'>
         <h2>Articulos  </h2>

         {carrito.length === 0 ? 'carrito vacio': (
           carrito.map( producto => (
            <div key={producto.id} className='producto'>

              <div>
                <img src={producto.imagen}
                 alt={`imagen del producto ${producto.nombre }`} />

              </div>

              <div>
                <p className='nombre'> { producto.nombre }</p>
              

                <select
                value={producto.cantidad}
                className="select" 
                onChange={ e => actualizarcantidad({
                  cantidad: +e.target.value,
                  id: producto.id 
                })}

                >

                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>


                <p className='precio'> $ <span>{producto.precio}</span></p>
                <p className='subtotal'> Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
              </div>

            </div>

           ))
         ) }
      </div>

    <aside className="resumen">
      <h3>Resumen de pedido</h3>
      <p>Total a pagar: $ { total }</p>

    </aside>


    </div>



   </main>
  )
}

export default Carrito