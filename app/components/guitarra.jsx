import { Link } from "@remix-run/react"

const Guitarra = ({guitarra }) => {

  //  console.log('guitarra',guitarra)
    const { descripcion, imagen, precio, url, nombre } = guitarra
    
    console.log('imagen',imagen.data.attributes.formats.medium.url)

  return (
    <div className="guitarra">
       <img src={imagen.data.attributes.formats.medium.url}
         alt={`imagenguitarras ${nombre}`} />


        <div className="contenido">
            <h3>{nombre}</h3>
            <p className="descripcion" >{descripcion}</p>
            <p className="precio"> $ {precio}</p>
            <Link className="enlace" to={`/guitarras/${url}`}>
              ver producto
            </Link>

        </div>

    </div>
  )
}

export default Guitarra