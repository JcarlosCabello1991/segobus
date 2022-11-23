import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import CallActions from '../../components/CallActions/CallActions.tsx'
import styles from '../Home/Home.module.css'
import Fleet from '../../components/Fleet/Fleet.tsx'
import Footer from '../../components/Footer/Footer.tsx'

function Cars() {
  return (
    <div className={styles.home__container}>
      <NavBar />
      <Fleet />
      <CallActions />
      <Footer />
    </div>
  )
}

export default Cars