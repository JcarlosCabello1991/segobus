import React from 'react'
import CallActions from '../../components/CallActions/CallActions.tsx'
import Description from '../../components/Description/Description.tsx'
import Footer from '../../components/Footer/Footer.tsx'
import NavBar from '../../components/NavBar/NavBar.tsx'
import Swipper from '../../components/swipper/Swipper.tsx'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home__container}>
      <NavBar />
      <Swipper />
      <Description />
      <CallActions />
      <Footer />      
    </div>    
  )
}

export default Home