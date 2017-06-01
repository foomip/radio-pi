import React from 'react'
import { Checkbox, Segment } from 'semantic-ui-react'

import BodyWrapperComponent from '../../components/BodyWrapperComponent'

export default class WizardVideoStreamingComponent extends React.Component {
  renderMasthead () {
    return (
      <div className='ui grid wizard-settings'>
        <div className='row'>
          <h2 className='ui inverted header wizard-header'>
            Enable Video streaming features
          </h2>
        </div>
        <div className='row'>
          <div className='column settings-info'>
            <p className='ui centered aligned'>
              Would you like to use the video streaming settings on your radio-pi device?
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='column settings-panel'>
            <div className='ui segment'>
              <div className='image'>
                <img src='/static/images/video-streaming.jpg' />
              </div>
              <div className='content'>
                <div className='header'>
                  <Checkbox
                    className=''
                    label='Enable video streaming'
                    toggle
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column settings-panel'>
            <a className='ui huge primary button' href='/wizard/radio-streaming'>
              Next <i className='right arrow icon'></i>
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
      >

      </BodyWrapperComponent>
    )
  }
}
