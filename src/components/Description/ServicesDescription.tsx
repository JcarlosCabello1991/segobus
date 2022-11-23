import React, { useContext } from 'react'
import contextProps from '../../Context/interfaces';
import styles from './styles.module.css'
import {selectorContext} from '../../Context/Context.tsx'
import es from '../../languages/es.json'
import en from '../../languages/en.json'
import fr from '../../languages/fr.json'

const servicesPaths: string[] = ['../../../excursiones.jpg',
'../../../busBoda.jpeg',
'../../../rutas.png',
'../../../taxi.jpg',
'../../../viajes.jpg'];

function ServicesDescription() {
  const {language} = useContext<contextProps>(selectorContext)

  return (
    <div className={styles.container_servicesDescription}>
      <h2>{language === 'es' ? es.nuestros_servicios : language === 'en' ? en.nuestros_servicios : fr.nuestros_servicios}</h2>
      <p>
      {language === 'es' ? es.entre_nuestros_servicios : language === 'en' ? en.entre_nuestros_servicios : fr.entre_nuestros_servicios}
      </p>
      <div className={styles.gridImages}>
        {
          servicesPaths.map((service, index) => {
            return(
            <div className={styles.div_container_imageAndTitles}>
              <img key={index} src={`${service}`} alt={service} className={styles.image}/>
              <h3>{language === 'es' ? es.titles[index] : language === 'en' ? en.titles[index] : fr.titles[index]}</h3>
            </div>
          )})
        }
      </div>
    </div>
  )
}

export default ServicesDescription