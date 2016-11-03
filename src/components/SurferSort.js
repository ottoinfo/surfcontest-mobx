import React from "react"
import { observable } from "mobx"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer 
export default class SurferInfo extends React.Component {

  @observable sort = "All"

  static propTypes = {
    handleSort: React.PropTypes.func,
  }

  selectedItem = (val)=> {
    return this.sort === val ? styles.selected : ""
  }

  handleSort = (val)=> {
    this.props.handleSort(val)
    this.sort = val
  }

  render() {
    return (
      <ul className={styles.sort}>
        <li className={this.selectedItem("All")} onClick={()=> this.handleSort("All")}>All</li>
        <li className={this.selectedItem("Mens")} onClick={()=> this.handleSort("Mens")}>Men</li>
        <li className={this.selectedItem("Womens")} onClick={()=> this.handleSort("Womens")}>Women</li> 
      </ul>
    )
  }

}