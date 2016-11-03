import React from "react"
import { observer } from "mobx-react"
import HeatEntry from "./HeatEntry"
import styles from "./style.scss"

@observer
export default class HeatList extends React.Component {

  static propTypes = {
    contest: React.PropTypes.array,
    handleRemove: React.PropTypes.func,
  }

  constructor(props, context) {
    super(props, context)
    this.contest = props.contest
  }

  componentWillReceiveProps(nextProps) {
    this.contest = nextProps.contest
  }

  render() {
    if (!this.contest.length) return (<p>No Entries</p>)
    return (
      <ul className={styles.entries}>
      { this.contest.map(entry =>
        <HeatEntry key={entry.uuid} entry={entry} handleRemove={this.props.handleRemove}/> 
      ) }
      </ul>
    )
  }
}