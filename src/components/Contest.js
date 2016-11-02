import React from "react"
import { observer } from "mobx-react"
import SurfersList from "./SurfersList"
import styles from "./style.scss"

@observer
export default class Contest extends React.Component {

  static contextTypes = {
    SurferStore: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.SurferStore = context.SurferStore
  }

  componentDidMount() {
    if (!this.SurferStore.isLoaded) {
      this.SurferStore.fetch()
    }
  }

  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.top_nav}>
          <p>{this.SurferStore.getItems.length}</p>

          <div className={styles.spacer}/>
        </div>

        <SurfersList surfers={this.SurferStore.getItems} />
      </div>
    )
  }
}