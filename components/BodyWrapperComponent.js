import React from 'react'

import MenuDesktopComponent from '../components/MenuDesktopComponent'

export default class BodyWrapperComponent extends React.Component {
  render () {
    const { children, masthead, url, style } = this.props

    return (
      <div className="pusher">
        <div style={style} className="ui inverted vertical masthead center aligned segment">
          <MenuDesktopComponent pathName={ url.pathname } />
          { masthead }
        </div>

        { children }
      </div>
    )
  }
}
