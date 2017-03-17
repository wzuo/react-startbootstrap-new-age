import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

class Footer extends Component {
  static propTypes = {};
  static componentName = 'Footer';

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    return (
      <footer>
        <div className="container">
          <p>&copy; 2016 Start Bootstrap. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
