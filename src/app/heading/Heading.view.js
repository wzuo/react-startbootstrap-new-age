import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';
import DemoScreenImage from '../../vendor/img/demo-screen-1.jpg';

class Heading extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <div className="header-content">
                <div className="header-content-inner">
                  <h1>New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
                  <a href="#download" className="btn btn-outline btn-xl page-scroll">Start Now for Free!</a>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      <img src={DemoScreenImage} className="img-fluid" alt="" />
                    </div>
                    <div className="button">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Heading;
