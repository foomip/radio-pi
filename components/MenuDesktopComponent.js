import React from 'react'

export default class MenuDesktopComponent extends React.Component {
  render () {
    const { pathName } = this.props

    return (
      <div className='ui container'>
        <div className='ui large secondary inverted pointing menu'>
          <a className='toc item'>
            <i className='sidebar icon'></i>
          </a>
          <a className={`${pathName === '/' ? 'active ' : ''}item`}>
            <i className='home icon big' />
          </a>
          <div className='right item'>
            <a
              className='ui button icon black'
              title='Configure rapi-pi'>
              <i className='setting icon large' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
