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
          <a className={`${pathName === '/' ? 'active ' : ''}item`} href='/'>
            <i className='home icon big' />
          </a>
          <div className='right item'>
            <a
              href='/settings'
              className={`ui button icon black${pathName === '/settings' ? ' active' : ''}`}
              title='Configure radio-pi'>
              <i className='setting icon large' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
