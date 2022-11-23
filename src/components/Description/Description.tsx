import React, { useContext } from 'react'
import contextProps from '../../Context/interfaces'
import styles from './styles.module.css'
import { selectorContext } from '../../Context/Context.tsx';
import es from '../../languages/es.json'
import en from '../../languages/en.json'
import fr from '../../languages/fr.json'

function Description() {
  const {language} = useContext<contextProps>(selectorContext);

  return (
    <div className={styles.container__allDescription}>
      <h2>{language === 'es' ? es.quienes_somos : language === 'en' ? en.quienes_somos : fr.quienes_somos}</h2>
      <div className={styles.description__container}>
        <p>
          <strong>{language === 'es' ? es.segobus : language === 'en' ? en.segobus : fr.segobus}</strong> {language === 'es' && es.segobus_es}
        </p>
        <p>
        {language === 'es' ? es.fundadores : language === 'en' ? en.fundadores : fr.fundadores}
        </p>
        <p>
        {language === 'es' ? es.autocares : language === 'en' ? en.autocares : fr.autocares}
        </p>
        <p>
        {language === 'es' ? es.logros : language === 'en' ? en.logros : fr.logros}
          <strong> {language === 'es' ? es.lema : language === 'en' ? en.lema : fr.lema}</strong>
        </p>
      </div>
      <h2 className={styles.description__container_section}>{language === 'es' ? es.nuestros_servicios : language === 'en' ? en.nuestros_servicios : fr.nuestros_servicios}</h2>
      <div className={styles.description__container}>
        <p>
        {language === 'es' ? es.nuestra_empresa : language === 'en' ? en.nuestra_empresa : fr.nuestra_empresa} <strong>{language === 'es' ? es.transporte_de : language === 'en' ? en.transporte_de : fr.transporte_de}</strong>{language === 'es' ? es.segovianos_a : language === 'en' ? en.segovianos_a : fr.segovianos_a} <strong>{language === 'es' ? es.transporte_oficial : language === 'en' ? en.transporte_oficial : fr.transporte_oficial}, </strong>{language === 'es' ? es.excursiones : language === 'en' ? en.excursiones : fr.excursiones}
        </p>
        <p>
          {language === 'es' ? es.universidad_sek : language === 'en' ? en.universidad_sek : fr.universidad_sek} <strong>{language === 'es' ? es.de_segovia : language === 'en' ? en.de_segovia : fr.de_segovia}</strong>. {language === 'es' ? es.ayuntamiento : language === 'en' ? en.ayuntamiento : fr.ayuntamiento}
        </p>
        <p>
        {language === 'es' ? es.por_ultimo : language === 'en' ? en.por_ultimo : fr.por_ultimo} <strong> {language === 'es' ? es.europa : language === 'en' ? en.europa : fr.europa}</strong>, {language === 'es' ? es.intercambios : language === 'en' ? en.intercambios : fr.intercambios}
        </p>
      </div>
      <h2 className={styles.description__container_section}>{language === 'es' ? es.alquile : language === 'en' ? en.alquile : fr.alquile}</h2>
      <div className={styles.description__container}>
        <p>
          <strong>{language === 'es' ? es.segobus : language === 'en' ? en.segobus : fr.segobus}</strong> {language === 'es' ? es.especialistas_en_alquiler : language === 'en' ? en.especialistas_en_alquiler : fr.especialistas_en_alquiler} <strong>{language === 'es' ? es.para : language === 'en' ? en.para : fr.para}</strong> {language === 'es' ? es.mejor_servicio : language === 'en' ? en.mejor_servicio : fr.mejor_servicio}
        </p>
        <p>
          {language === 'es' ? es.facilita : language === 'en' ? en.facilita : fr.facilita} <strong>{language === 'es' ? es.servicio_autentico : language === 'en' ? en.servicio_autentico : fr.servicio_autentico}</strong>{language === 'es' ? es.cualquier_situacion : language === 'en' ? en.cualquier_situacion : fr.cualquier_situacion}
        </p>
      </div>
      <h2 className={styles.description__container_section}>{language === 'es' ? es.flota : language === 'en' ? en.flota : fr.flota}</h2>
      <div className={styles.description__container}>
        <p>
        {language === 'es' ? es.nuestros_vehiculos : language === 'en' ? en.nuestros_vehiculos : fr.nuestros_vehiculos}<br></br>
        {language === 'es' ? es.cincuenta_plazas : language === 'en' ? en.cincuenta_plazas : fr.cincuenta_plazas}<br></br>
        {language === 'es' ? es.treinta_y_cinco : language === 'en' ? en.treinta_y_cinco : fr.treinta_y_cinco}<br></br>
        </p>
        <p>
        <strong>{language === 'es' ? es.equipados : language === 'en' ? en.equipados : fr.equipados}</strong>
        </p>
        
        <ul style={{paddingInlineStart:'1.25rem'}}>
          {
            language === 'es' ?
            es.extras.map((extra, index) => {
              return(
                <li key={index}>{extra}</li>
              )
            })
            : language === 'en' ?
              en.extras.map((extra, index) => {
              return(
                <li key={index}>{extra}</li>
              )
            })
            :
            fr.extras.map((extra, index) => {
              return(
                <li key={index}>{extra}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Description