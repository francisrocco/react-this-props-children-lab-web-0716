const React = require('React')

class Invitation extends React.Component {
  render() {
    return(
      <div>
        <h1>'You have been invited!'</h1>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Invitation
