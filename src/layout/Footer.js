import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer
export default class Footer extends React.Component {

  render() {
    return (
      <footer className={styles.footer}>
        <p>Author: <a href="mailto:matt@ottoinfo.com">Matthew Otto</a></p>
        <p>Cell: <a href="tel:7147246786">714.724.6786</a></p>
      </footer>
    )
  }

}