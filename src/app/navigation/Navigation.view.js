import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';
import Affix from '../utils/Affix';

import styles from './Navigation.module.css';

class Navigation extends Component {
  static propTypes = {};
  static componentName = 'Navigation';

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    return (
      <Affix
        offset={100}
        id="mainNav"
        tagName="nav"
        className={`navbar navbar-toggleable-md navbar-light navbar-fixed-top affix-top ${styles.navbar}`}
        affixClassName="fixed-top affix">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarExample"
          aria-controls="navbarExample"
          aria-expanded="false"
          aria-label="Toggle navigation">
          Menu <i className="fa fa-bars"></i>
        </button>
        <div className="container">
          <a className="navbar-brand page-scroll" href="#page-top">
            Start Bootstrap
          </a>
          <div className="collapse navbar-collapse" id="navbarExample">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#download">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Affix>
    );
  }
}

export default Navigation;
