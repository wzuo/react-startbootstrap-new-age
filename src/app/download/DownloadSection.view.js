import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';
import GooglePlayBadge from '../../vendor/img/google-play-badge.svg';
import AppStoreBadge from '../../vendor/img/app-store-badge.svg';

class DownloadSection extends Component {
  static propTypes = {};
  static componentName = 'DownloadSection';

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    return (
      <section id="download" className="download bg-primary text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className="section-heading">Discover what all the buzz is about!</h2>
              <p>Our app is available on any mobile device! Download now to get started!</p>
              <div className="badges">
                <a className="badge-link" href="#">
                  <img src={GooglePlayBadge} alt="" />
                </a>
                <a className="badge-link" href="#">
                  <img src={AppStoreBadge} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DownloadSection;
