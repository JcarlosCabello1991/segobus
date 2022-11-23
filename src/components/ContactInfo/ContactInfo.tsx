import React, { useContext } from 'react'
import contextProps from '../../Context/interfaces';
import styles from './styles.module.css'
import {selectorContext} from '../../Context/Context.tsx'
import es from '../../languages/es.json'
import en from '../../languages/en.json'
import fr from '../../languages/fr.json'
function ContactInfo() {
  const {language} = useContext<contextProps>(selectorContext);
  return (
    <div className={styles.mainInfo}>
      <h2>{language === 'es' ? es.titulo_contacto : language === 'en' ? en.titulo_contacto : fr.titulo_contacto}</h2>
      <p>
      {language === 'es' ? es.prefieres : language === 'en' ? en.prefieres : fr.prefieres}
      </p>
      <p>
        -{language === 'es' ? es.email_contacto : language === 'en' ? en.email_contacto : fr.email_contacto}<br></br>
        -{language === 'es' ? es.telefonos_contacto : language === 'en' ? en.telefonos_contacto : fr.telefonos_contacto}
      </p>
      <p>
        {language === 'es' ? es.feliz_viaje : language === 'en' ? en.feliz_viaje : fr.feliz_viaje}
      </p>
    </div>
  )
}

export default ContactInfo