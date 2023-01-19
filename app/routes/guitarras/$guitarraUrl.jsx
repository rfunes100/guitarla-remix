
import { useState } from "react"
import { useLoaderData , useOutletContext } from "@remix-run/react"
import { getGuitarra } from "~/model/guitarras.server"


export async function loader({request, params})
{
   const {guitarraUrl}  = params
   const guitarra = await getGuitarra(guitarraUrl )
  // console.log(guitarra)
  if(guitarra.data.length === 0)
  {
    throw new Response('',{
        status: 404,
        statusText: 'Guitarra no encontrada'
    })
  }

    return guitarra
}



export function meta({data}){

    if(!data)
    {
        return {
            title: `GuitarLA - Guitarra no encontrada `,
            descripction:  `Guitarras, venta de guitarras, guitarra no encontrada `
        
           } 
    }
   return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    descripction:  `Guitarras, venta de guitarras ${data.data[0].attributes.nombre}`

   }

}


const Guitarra = () => {

  const { agregarCarrito } = useOutletContext()
  console.log('agregarcarrito',agregarCarrito)
  const [cantidad, setCantidad ] = useState(0)

    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen , precio } = guitarra.data[0].attributes
 //  console.log('imagen',imagen)
  //  console.log('guita',guitarra)

  const handlesubmit = e => {
    e.preventDefault()

    if(cantidad < 1){
      alert('Debe seleccionar una cantidad')
      return

    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad

    }
    agregarCarrito(guitarraSeleccionada)

  //  console.log('guitarraSeleccionadam',guitarraSeleccionada)

  }

  return (
    <div className="guitarra">
        <img className="imagen" src={imagen.data.attributes.url}  alt={`imagen de la guitata ${nombre}`} />

        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="texto">{descripcion}</p>
            <p className="precio">{precio}</p>

            <form onSubmit={handlesubmit} className="formulario" 
            >
              <label htmlFor="cantidad">Cantidad</label>

              <select name="cantidad" id="cantidad"
              onChange={e => setCantidad( parseInt(e.target.value) )}
              >
                <option value="0">-- Selecciones --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

              </select>

              <input type="submit" 
               value='Agregar al carrito'
              />
            </form>
        </div>

    </div>
  )
}

export default Guitarra