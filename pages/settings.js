import React from 'react'

import BodyWrapperComponent from '../components/BodyWrapperComponent'

export default class SettingsComponent extends React.Component {
  renderMasthead () {
    return (
      <div className='ui vertically padded page stackable grid'>
        <div className='row'>
          <h2 className='ui inverted header settings-header'>
            Please select the component you would like to configure.
          </h2>
        </div>
        <div className='two column row'>
          <div className='inverted column settings-card'>
            <a href='#'>
              <div className='ui card'>
                <div className='image'>
                  <img src='/static/images/video-streaming.jpg' />
                </div>
                <div className='content'>
                  <div className='header'>
                    Video streaming settings
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='inverted column settings-card'>
            <a href='#'>
              <div className='ui card'>
                <div className='image'>
                  <img src='/static/images/radio-streaming.jpg' />
                </div>
                <div className='content'>
                  <div className='header'>
                    Radio streaming settings
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <BodyWrapperComponent {...this.props}
        masthead={this.renderMasthead()}
        style={{minHeight: '100vh'}}
      >

      </BodyWrapperComponent>
    )
  }
}
