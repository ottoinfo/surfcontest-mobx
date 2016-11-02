import React from "react"
import { observer } from "mobx-react"

// Stores
import { getStores, getStoreTypes } from "../stores/index"

@observer
export default class MobxWrapper extends React.Component {
  static propTypes = { children: React.PropTypes.node }
  
  static childContextTypes = getStoreTypes

  getChildContext() {
    return getStores
  }

  render() {
    return (
      <div id="wrapper">
        {this.props.children}
      </div>
    )
  }
}