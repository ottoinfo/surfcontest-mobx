import React from "react"
import { observer } from "mobx-react"
import SurfersList from "./SurfersList"
import SurferSort from "./SurferSort"
import HeatList from "./HeatList"
import styles from "./style.scss"

@observer
export default class Contest extends React.Component {

  static contextTypes = {
    SurferStore: React.PropTypes.object.isRequired,
    ContestStore: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.SurferStore = context.SurferStore
    this.ContestStore = context.ContestStore
  }

  componentDidMount() {
    if (!this.SurferStore.isLoaded) {
      this.SurferStore.fetch()
    }
  }

  handleSort = (sort)=> {
    switch (sort) {
    case "Mens":
      this.SurferStore.items.map(item=> item.show = Boolean(item.division === sort))
      break
    case "Womens":
      this.SurferStore.items.map(item=> item.show = Boolean(item.division === sort))
      break
    default:
      this.SurferStore.items.map(item=> item.show = true)
      break
    }
  }

  handleAdd = (id)=> {
    const item = this.SurferStore.findItem(id, "athleteId")
    item.entered = true
    this.ContestStore.addItem({ surfer: item, scores: [] })
  }

  handleRemove = (id)=> {
    this.SurferStore.findItem(id, "athleteId").entered = true
  }

  render() {
    return (
      <div className={styles.contest}>
        <div className={styles.left_rail}>
          <div className={styles.top_nav}>
            <p>{this.SurferStore.getItems.length}</p>
            <SurferSort handleSort={this.handleSort} />
          </div>

          <SurfersList surfers={this.SurferStore.getItems} handleAdd={this.handleAdd} />
        </div>

        <HeatList contest={this.ContestStore.getItems} handleRemove={this.handleRemove} />
      </div>
    )
  }
}