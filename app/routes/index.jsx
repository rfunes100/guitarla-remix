
import { useLoaderData } from '@remix-run/react'
import { getGuitarras  } from "~/model/guitarras.server"
import { getPosts } from "~/model/posts.server"
import { getCurso } from '~/model/curso.server'
import Listadosguitarras from '~/components/listados-guitarras'
import stylesGuitarra from '~/styles/guitarras.css'
import ListadPosts from '~/components/listado-posts'
import stylesPosts from '~/styles/blog.css'
import Curso from '~/components/curso'
import stylesCurso from '~/styles/curso.css'


export function meta(){
  return{
    title: 'GuitarraLA - Tienda de Guitarras',
    description: 'GuitarraLA - Nuestrac Coleccion de guitarras'

  }
}


export function links(){
  return [
    {
      rel:'stylesheet',
      href:stylesGuitarra
    },
    {
      rel:'stylesheet',
      href:stylesPosts
    },
    {
      rel:'stylesheet',
      href:stylesCurso
    }
  ]

}

export async function loader(){

  const [guitarras , posts, curso  ] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])


  return  {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}


function Index  ()  {
 const {guitarras,  posts,curso } = useLoaderData()
 //console.log(guitarras )
 console.log(curso )

return (
  <>
  
  <main className='contenedor'>
    <Listadosguitarras
    guitarras={guitarras}
    >

    </Listadosguitarras>

  </main>

  <Curso
  curso={curso.attributes}
  >

  </Curso>

  <section className='contenedor'>
    <ListadPosts
    posts={posts}
    >

    </ListadPosts>
  </section>

  </>
)

}


export default Index