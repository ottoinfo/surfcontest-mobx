import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer
export default class Header extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <header className={styles.header}>
        <p>Surfer Competition</p>

        <div className={styles.spacer}/>
      </header>
    )
  }

}