import React from 'react'

import BodyWrapperComponent from '../components/BodyWrapperComponent'

export default class IndexComponent extends React.Component {
  renderMasthead () {
    return (
      <div className='ui text container'>
        <h1 className='ui inverted header'>
          Welcome to RADIO-PI
        </h1>
        <img className='radio-pi-logo' src='/static/images/car-radio-logo.png' />
        <h2>Let's get your system set up!</h2>
        <a className='ui huge primary button' href='/wizard/video-streaming'>
          Get Started <i className='right arrow icon'></i>
        </a>
      </div>
    )
  }

  render() {
    return (
      <BodyWrapperComponent { ...this.props }
        masthead={this.renderMasthead()}
        style={{height: '100vh', minHeight: '65rem'}}
      >
      </BodyWrapperComponent>
      //   <div className='ui vertical stripe quote segment'>
      //     <div className='ui equal width stackable internally celled grid'>
      //       <div className='center aligned row'>
      //         <div className='column'>
      //           <h3>'What a Company'</h3>
      //           <p>That is what they all say about us</p>
      //         </div>
      //         <div className='column'>
      //           <h3>'I shouldn't have gone with their competitor.'</h3>
      //           <p>
      //             <img src='assets/images/avatar/nan.jpg' className='ui avatar image'></img>
      //             <b>Nan</b> Chief Fun Officer Acme Toys
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      //
      //   <div className='ui vertical stripe segment'>
      //     <div className='ui text container'>
      //       <h3 className='ui header'>Breaking The Grid, Grabs Your Attention</h3>
      //       <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
      //       <a className='ui large button'>Read More</a>
      //       <h4 className='ui horizontal header divider'>
      //         <a href='#'>Case Studies</a>
      //       </h4>
      //       <h3 className='ui header'>Did We Tell You About Our Bananas?</h3>
      //       <p>Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really true. It took years of gene splicing and combinatory DNA research, but our bananas can really dance.</p>
      //       <a className='ui large button'>Im Still Quite Interested</a>
      //     </div>
      //   </div>
      //
      //
      //   <div className='ui inverted vertical footer segment'>
      //     <div className='ui container'>
      //       <div className='ui stackable inverted divided equal height stackable grid'>
      //         <div className='three wide column'>
      //           <h4 className='ui inverted header'>About</h4>
      //           <div className='ui inverted link list'>
      //             <a href='#' className='item'>Sitemap</a>
      //             <a href='#' className='item'>Contact Us</a>
      //             <a href='#' className='item'>Religious Ceremonies</a>
      //             <a href='#' className='item'>Gazebo Plans</a>
      //           </div>
      //         </div>
      //         <div className='three wide column'>
      //           <h4 className='ui inverted header'>Services</h4>
      //           <div className='ui inverted link list'>
      //             <a href='#' className='item'>Banana Pre-Order</a>
      //             <a href='#' className='item'>DNA FAQ</a>
      //             <a href='#' className='item'>How To Access</a>
      //             <a href='#' className='item'>Favorite X-Men</a>
      //           </div>
      //         </div>
      //         <div className='seven wide column'>
      //           <h4 className='ui inverted header'>Footer Header</h4>
      //           <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </BodyWrapperComponent>
    )
  }
}
