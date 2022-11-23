import React from 'react'
import NavBar from '../../components/NavBar/NavBar.tsx'
import CallActions from '../../components/CallActions/CallActions.tsx'
import styles from './styles.module.css'
import Form from '../../components/BudgetForm/Form.tsx'

function Budget() {
  return (
    <div className={styles.home__container}>
      <NavBar />
      <Form />
      <CallActions />
    </div>
  )
}

export default Budget