import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import styles from '../Home/Home.module.css'
import CallActions from '../../components/CallActions/CallActions.tsx'
import ContactInfo from '../../components/ContactInfo/ContactInfo.tsx'

function Contact() {
  return (
    <div className={styles.home__container}>
      <NavBar />
      <ContactInfo />
      <CallActions />
    </div>
  )
}

export default Contact