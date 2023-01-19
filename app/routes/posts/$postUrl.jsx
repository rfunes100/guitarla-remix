
import { getPost } from "~/model/posts.server"
import { useLoaderData
    
 } from "@remix-run/react"

 import {formatearfecha} from '~/utils/helpers'

export function meta({data}){

    if(!data)
    {
        return {
            title: `GuitarLA - Entrada no encontrada `,
            descripction:  `Guitarras, venta de guitarras, Entrada no encontrada `
        
           } 
    }
   return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    descripction:  `Guitarras, venta de guitarras ${data.data[0].attributes.titulo}`

   }

}

export async function loader({params}) {
    
    const { postUrl } = params
    const post =  await getPost(postUrl )

   // console.log('posturl', postUrl)
   // console.log('post', post)
    if(post.data.length === 0)
    {
        throw new Response('' , {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }

    return post

}

export default function  Post() {

    const post = useLoaderData()
    const { titulo, contenido , imagen , publishedAt } = post.data[0].attributes

    //  console.log('post cliente',post)
  return (
    <article className="post mt-3">
         <img className="imagen" src={imagen.data.attributes.url} alt={`imagen blog${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearfecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
           
        </div>


    </article>

  )
}
