import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer 
export default class SurferInfo extends React.Component {

  static propTypes = {
    surfer: React.PropTypes.object,
    handleAdd: React.PropTypes.func,
  }

  constructor(props, context) {
    super(props, context)
    this.surfer = props.surfer
  }

  handleAdd = ()=> {
    this.props.handleAdd(this.surfer.athleteId)
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
            <button onClick={this.handleAdd} disabled={this.surfer.entered}>{ !this.surfer.entered ? "Add" : "Entered" }</button>
          </div>
        </div>
      </li>
    )
  }
}