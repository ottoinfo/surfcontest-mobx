import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer
export default class HeatList extends React.Component {

  static propTypes = {
    entry: React.PropTypes.obj,
    handleRemove: React.PropTypes.func,
  }

  constructor(props, context) {
    super(props, context)
    this.entry = props.entry
  }

  render() {
    const { surfer, waves } = this.entry
    return (
      <li className={styles.item}>
        <img src={surfer.image} alt={surfer.fullName} className={styles.image} />

        <div className={styles.info}>
          <div className={styles.title}>
            <h1>{surfer.fullName}</h1>
            <p>{surfer.origin}</p>
          </div>
        </div>
      </li>
    )
  }
}