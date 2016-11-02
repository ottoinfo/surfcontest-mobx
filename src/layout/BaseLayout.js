import React from "react"
import { observer } from "mobx-react"
import MobxWrapper from "./MobxWrapper"
import Header from "./Header"
import Footer from "./Footer"
import styles from "./style.scss"

@observer
export default class BaseLayout extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    options: React.PropTypes.string,
  }

  render() {
    return (
      <MobxWrapper id="layout">
        <Header />
        <div id="content" className={styles.content}>
          { this.props.children }
        </div>
        <Footer />
      </MobxWrapper>
    )
  }

}