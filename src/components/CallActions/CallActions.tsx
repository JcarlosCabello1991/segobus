import React, { useContext, useState } from 'react'
import styles from './styles.module.css'

import { selectorContext } from '../../Context/Context.tsx';
import contextProps from '../../Context/interfaces';

const iconLanguage = [
  {
    lang: "fr",
    src:"../../../france.png",
    alt:"call to taxi"
  },{
    lang: "en",
    src:"../../../england.png",
    alt:"call to taxi"
  },{
    lang: "es",
    src:"../../../spain.png",
    alt:"call to taxi"
  }
]

function CallActions() {
  const {language, setLanguage} = useContext<contextProps>(selectorContext);
  const [hide, setHide] = useState<boolean>(true);
  const handleLanguages = () => {
    setHide(!hide);
  }
  
  return (
    <>
      {
      hide === false && 
      <div className={styles.anchorShowLanguages}>
        {
          iconLanguage.filter(element => element.lang !== language).map((icon, index) => {
            return(
              icon.lang !== language && <img key={index} src={`${icon.src}`} alt={`${icon.alt}`} className={index === 0 ? styles.langToSelect : styles.langToSelect1} onClick={() => {handleLanguages();setLanguage(icon.lang);}}/>
            )            
          })
        }
      </div>
      }
      <div className={styles.anchorLanguage}>
        {
          iconLanguage.map((icon, index) => {
            return(
              icon.lang === language && <img key={index} src={`${icon.src}`} alt={`${icon.alt}`} className={styles.spain__icon} onClick={()=>{handleLanguages()}}/>
            )
          })
        }
      </div>
      <a href='tel:620634146' className={styles.anchorTaxi}><img src='../../../taxiCall.png' alt="call to taxi" className={styles.taxi_icon}/></a>
      <a href="https://wa.me/34620634146" className={styles.anchorWhatsapp}><img src='../../../whatsapp.png' alt='whatsapp' className={styles.whatsapp_icon}/></a>
    </>
  )
}

export default CallActions