import React from "react"
import { observer } from "mobx-react"
import SurferInfo from "./SurferInfo"
import styles from "./style.scss"

@observer
export default class SurferList extends React.Component {

  static propTypes = {
    surfers: React.PropTypes.array,
    handleAdd: React.PropTypes.func,
  }

  constructor(props, context) {
    super(props, context)
    this.surfers = props.surfers
  }

  componentWillReceiveProps(nextProps) {
    this.surfers = nextProps.surfers
  }

  render() {
    if (!this.surfers.length) return null
    return (
      <ul className={styles.surfers}>
      { this.surfers.map(surfer =>
        <SurferInfo key={surfer.uuid} surfer={surfer} handleAdd={this.props.handleAdd}/> 
      ) }
      </ul>
    )
  }
}