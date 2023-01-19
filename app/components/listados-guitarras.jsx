
import Guitarra from './guitarra'


export default function Listadosguitarras({ guitarras }) {
  return (
    <>
              <h2 className='heading'>Nuestra Coleccion </h2>

{guitarras.length && (
 <div className='guitarras-grid'>
   {guitarras.map(guitarra => (
     <Guitarra
     key={guitarra?.id}
     guitarra={guitarra?.attributes}
     
     ></Guitarra>

   ))}

 </div>
)}

    </>
   
  )
}
