import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import CallActions from '../../components/CallActions/CallActions.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import styles from './styles.module.css'
import ServicesDescription from '../../components/Description/ServicesDescription.tsx'

function Services() {
  return (
    <div className={styles.home__container}>
    <NavBar />
    <ServicesDescription />
    <CallActions />
    </div>
  )
}

export default Services