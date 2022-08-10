import React from 'react'
import Form from './Form'
import styles from './Settings.module.scss'
export default function Settings() {
  return (
    <div className={styles.settings}>
      <h1 className={styles.header}>Settings</h1>
      <Form/>
    </div>
  )
}
