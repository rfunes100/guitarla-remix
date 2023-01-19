import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'


export function meta(){
  return {
    title: 'GuitarLA - Sobre nosotros',
    description: 'venta de guitarras'
  }
}

export function links(){
  return [
      {
        rel: 'stylesheet',
        href: styles
      },
      {
        rel: 'preload',
        href: imagen , 
        as: 'imagen'
      }
    ]
}

const Nosotros = () => {


  return (
    <main className="contenedor nosotros">
      <h2 className="heading">
        Nosotros

      </h2>

      <div className="contenido">
        <img crossOrigin={null}  src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
          Suspendisse hendrerit erat id arcu tristique commodo. Vivamus sem arcu, iaculis at tincidunt non, suscipit non mauris. Integer at sollicitudin est. Nulla feugiat eleifend ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vehicula blandit condimentum. Vivamus accumsan ante eget tortor tristique, ac facilisis arcu ornare. Donec facilisis imperdiet odio, non auctor dolor gravida non.
     </p>
     <p>
      
Morbi interdum arcu sed risus iaculis, et egestas tellus laoreet. Aliquam elit felis, sagittis a condimentum congue, egestas in felis. Nunc sit amet turpis gravida, consectetur augue sit amet, placerat odio. Proin posuere nibh nunc, ut elementum erat egestas in. Nam facilisis ligula gravida diam facilisis, sed sollicitudin odio elementum. Sed ac volutpat risus. Maecenas fermentum, mi non tincidunt sollicitudin, felis neque dignissim ex, et vestibulum tortor nulla id neque. Integer elementum posuere enim, vel interdum nulla iaculis vel. Phasellus bibendum pulvinar dictum. Integer dignissim malesuada dolor eu posuere. In iaculis laoreet nisl ut tincidunt. Phasellus sodales mi nunc, non volutpat turpis scelerisque nec. Donec ullamcorper orci mattis ipsum imperdiet tincidunt. Quisque id purus id augue congue porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
     
     </p>
        </div>

      </div>


    </main>
  )
}

export default Nosotros