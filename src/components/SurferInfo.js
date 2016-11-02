import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer 
export default class SurferInfo extends React.Component {

  static propTypes = {
    surfer: React.PropTypes.object,
  }

  constructor(props, context) {
    super(props, context)
    this.surfer = props.surfer
  }

  render() {
    if (!this.surfer.show) return null
    return (
      <li className={styles.item}>
        <img src={this.surfer.image} alt={this.surfer.fullName} className={styles.image} />

        <div className={styles.info}>
          <div className={styles.title}>
            <h1>{this.surfer.fullName}</h1>
            <p>{this.surfer.origin}</p>
          </div>
        </div>
      </li>
    )
  }
}