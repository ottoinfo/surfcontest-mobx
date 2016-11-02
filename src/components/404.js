import React from "react"

export default class NotFound extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  static propTypes = { 
    params: React.PropTypes.object,
  }

  render() {
    console.log(this.props.params.splat)

    return (
      <div id='not_found'>
        <h1>404...this page was not found!</h1>
      </div>
    )
  }

}