import { useState, useEffect } from 'react'

import {
 Meta,
 Links,
 Outlet,
 Scripts,
 LiveReload,
 useCatch, 
 Link
} from '@remix-run/react'


import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'
//import stylesGuitarra from '~/styles/guitarras.css'

export function meta()
{
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: "width=device-width,initial-scale=1"
        }
    )
}



export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com' 
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true' 
        },
        {
            rel: 'stylesheet',
            href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
        }
      //  {
       //     rel:'stylesheet',
      //      href:stylesGuitarra
      //  }

    ]
}


export default function App()
{

    const carritols = typeof window !== 'undefined'? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito , setCarrito] = useState(carritols)


    useEffect(() => {
       
        localStorage.setItem('carrito', JSON.stringify(carrito))
        console.log('desde useeffect')
      
        return () => {
          localStorage.setItem('carrito', JSON.stringify(carrito))
          console.log('desde useeffect primero')
        }
      }, [carrito])
      

      
    const agregarCarrito = guitarra => {
        
        if(carrito.some(guitarraState => guitarraState.id === guitarra.id )){
            const carritoactualizado = carrito.map( guitarraState => {
                if(guitarraState.id === guitarra.id){
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoactualizado)

        }
        else{
              setCarrito([...carrito , guitarra])

        }
      

    }

    const actualizarcantidad = guitarra => {
        const carritoactualizado = carrito.map(guitarraState =>{
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoactualizado)
      

    }

    const eliminarguitarra = id => {
      //  console.log('eliminarguitarra', id)
        const carritoactualizado = carrito.filter( guitarraState => guitarraState.id !== id)
        setCarrito(carritoactualizado)
        

    }

    return (
        <Document>
            <Outlet
             context={{
                agregarCarrito,
                carrito,
                actualizarcantidad,
                eliminarguitarra
               
             }}
            >

            </Outlet>

        </Document>
    )
}

function Document({children})
{
    return (
        <html lang="es">
            <head>
              <Meta></Meta>
              <Links></Links>

            </head>
            <body>
                <Header></Header>
                {children}
                <Footer></Footer>
                
                <Scripts>

                </Scripts>
                <LiveReload></LiveReload>

            </body>

        </html>
    )
}

export function CatchBoundary(){
    const error = useCatch()
    return(
        <Document>
            <p className='error'>{error.status} { error.statusText}</p>
            <Link className='error-enlace' to='/'> Tal vez quieras volver a la pagina principal </Link>
        </Document>
    )

}

export function ErrorBoundary( {error}){
    return(
        <Document>
        <p className='error'>{error.status} { error.statusText}</p>
        <Link className='error-enlace' to='/'> Tal vez quieras volver a la pagina principal </Link>
    </Document>
    )

}