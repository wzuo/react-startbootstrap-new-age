import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';
import DemoScreenImage from '../../vendor/img/demo-screen-1.jpg';

class FeaturesSection extends Component {
  static propTypes = {};
  static componentName = 'FeaturesSection';

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    return (
      <section id="features" className="features">
        <div className="container">
          <div className="section-heading text-center">
            <h2>Unlimited Features, Unlimited Fun</h2>
            <p className="text-muted">Check out what you can do with this app theme!</p>
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="device-container">
                <div className="device-mockup iphone6_plus portrait white">
                  <div className="device">
                    <div className="screen">
                      <img src={DemoScreenImage} className="img-fluid" alt="" /> </div>
                      <div className="button">
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-screen-smartphone text-primary"></i>
                      <h3>Device Mockups</h3>
                      <p className="text-muted">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-camera text-primary"></i>
                      <h3>Flexible Use</h3>
                      <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-present text-primary"></i>
                      <h3>Free to Use</h3>
                      <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item">
                      <i className="icon-lock-open text-primary"></i>
                      <h3>Open Source</h3>
                      <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturesSection;
