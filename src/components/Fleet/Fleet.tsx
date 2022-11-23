import React, { useContext } from 'react'
import styles from './styles.module.css'
import es from '../../languages/es.json'
import en from '../../languages/en.json'
import fr from '../../languages/fr.json'
import contextProps from '../../Context/interfaces'
import {selectorContext} from '../../Context/Context.tsx'

function Fleet() {
  const {language} = useContext<contextProps>(selectorContext);

  return (
    <div className={styles.description__fleet}>
      <h2>{language === 'es' ? es.nuestra_flota : language === 'en' ? en.nuestra_flota : fr.nuestra_flota}</h2>
      <p>
      {language === 'es' ? es.contamos_con : language === 'en' ? en.contamos_con : fr.contamos_con}
      </p>
      <p>
      {language === 'es' ? es.nombres : language === 'en' ? en.nombres : fr.nombres}
      </p>
      <p>
      {language === 'es' ? es.nuestros_vehiculos : language === 'en' ? en.nuestros_vehiculos : fr.nuestros_vehiculos}
      </p>
      <p>
      {language === 'es' ? es.cincuenta_plazas : language === 'en' ? en.cincuenta_plazas : fr.cincuenta_plazas}
      </p>
      <p>
      {language === 'es' ? es.treinta_y_cinco : language === 'en' ? en.treinta_y_cinco : fr.treinta_y_cinco}
      </p>
      <p>
      {language === 'es' ? es.equipados : language === 'en' ? en.equipados : fr.equipados}
      </p>
      <ul className={styles.list}>
        {
          (language === 'es' ? es.extras : language === 'en' ? en.extras : fr.extras).map((extra, index) => {
            return(
              <li key={index}>{extra}</li>
            )
          })
        }
      </ul>
      <div className={styles.fleet_images}>
        <h3 style={{fontStyle:'italic'}} className={styles.title_bus}>Cristina</h3>
        <img src='../../../bus3.jpg' alt='cristina' className={styles.img_bus}/>
        <p>
          Cristina es un autobus sin igual, tiene el caracter y la fuerza que necesitas para afrontar tu viaje con la maxima ilusión y comodidad, está acostumbrado a realizar viajes internacionales por lo que será tu transporte perfecto vayas donde vayas.
        </p>
        <h3 style={{fontStyle:'italic'}} className={styles.title_bus}>Santy</h3>
        <img src='../../../bus2.jpg' alt='santy' className={styles.img_bus}/>
        <p>
          Santy es un autobus lleno de sabiduria, confianza e ilusiones, que llevan y hacen realidad cada uno de los sueños de aquellos que deciden acudir en su ayuda, además si estas planeando un viaje nacional, una ruta, una boda, sea lo que sea santy hará que disfrutes la experiencia y sea uno de los mejores viajes de tu vida.
        </p>
        <h3 style={{fontStyle:'italic'}} className={styles.title_bus}>Ana</h3>
        <img src='../../../bus1.jpg' alt='santy' className={styles.img_bus}/>
        <p>
          Ana es vehiculo que te sorprendera para bien, te dará esa tranquilidad que necesitas para relajarte totalmente, pero tambien tiene ese toque de locura que hace que un día gris se convierta en un día dorado, simplemente dejate llevar y que ana te arrope en sus muy comodas butacas durante tu viaje.
        </p>
      </div>
    </div>
  )
}

export default Fleet