import React from 'react'

export default class MenuMobilecomponent extends React.Component {
  render () {
    return (
      <div className="ui vertical inverted sidebar menu">
        <a className="active item">Home</a>
        <a className="item">Work</a>
        <a className="item">Company</a>
        <a className="item">Careers</a>
        <a className="item">Login</a>
        <a className="item">Signup</a>
      </div>
    )
  }
}
