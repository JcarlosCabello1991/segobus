import React, { MutableRefObject, useContext, useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import keys from './ApiKey.ts'
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';
import contextProps from '../../Context/interfaces'
import {selectorContext} from '../../Context/Context.tsx'
import es from '../../languages/es.json'
import en from '../../languages/en.json'
import fr from '../../languages/fr.json'

function Form() {
  const [error, setError] = useState<boolean | undefined>(undefined);
  const {language} = useContext<contextProps>(selectorContext);

  const sendData = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget)
    emailjs.sendForm(keys.SERVICE_ID, keys.TEMPLATE_ID, e.currentTarget, keys.USER_ID)
    .then(result => {
      setError(false);
    },
    error => {
      setError(true);
    })
    e.currentTarget.reset();
  }

  const timeOut = setTimeout(()=>{
    setError(undefined)
  },3000)

  return (
    <div className={styles.form_container}>
      <h2>{language === 'es' ? es.presupuesto_titulo : language === 'en' ? en.presupuesto_titulo : fr.presupuesto_titulo}</h2>
      <form className={styles.form} onSubmit={sendData}>
        <div className={styles.name_lastName}>
          <input name='name' placeholder="name" type="text" className={styles.input} />
          <input name='lastName' placeholder="Last name" type="text" className={styles.input} />
        </div>
        <div className={styles.name_lastName}>
          <input name='email' placeholder="Email" type="text" className={styles.input} />
          <input name='phone' placeholder="Phone" type="text" className={styles.input} />
        </div>
        <div className={styles.name_lastName}>
          <input name='From' placeholder="From" type="date" className={styles.input} />
          <input name='To' placeholder="To" type="date" className={styles.input} />
        </div>
        <div className={styles.input_pax}>
          <input name='Pax' placeholder="Pax" type="text" className={styles.input} />
        </div>
        <div className={styles.textArea}>
          <label>{language === 'es' ? es.detalles : language === 'en' ? en.detalles : fr.detalles}</label>
          <TextField
          name='description'
          id="outlined-textarea"
          multiline
          rows={4}
          variant="filled"
          fullWidth
        />
        </div>
        {
          error !== undefined && 
          <div className={ error === true ? styles.msg_alert_red : styles.msg_alert}>
            {error === true && <p>{language === 'es' ? es.mensaje_error : language === 'en' ? en.mensaje_error : fr.mensaje_error}</p>}
            {error === false && <p>{language === 'es' ? es.mensaje : language === 'en' ? en.mensaje : fr.mensaje}</p>}
          </div>
        }
       
        <button className={styles.btn_send} type='submit'>
        {language === 'es' ? es.enviar : language === 'en' ? en.enviar : fr.enviar}
        </button>
      </form>
    </div>
  )
}

export default Form