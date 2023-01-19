
import { useLoaderData } from "@remix-run/react"
//import Post from "~/components/post"
import { getPosts } from "~/model/posts.server"
import ListadPosts from "~/components/listado-posts"

export function meta() {
  return {
      title: 'GuitarLA - Nuestro Blog',
      description: 'GuitarLA blog de musica'
  }

}

export async function loader(){
  const posts = await getPosts()
//  console.log(posts)

  return posts.data
}

function Blog() {

  const posts =useLoaderData()

  return (

    <ListadPosts
    posts={posts}
    >

    </ListadPosts>

  )
}

export default Blog