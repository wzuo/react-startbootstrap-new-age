import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

class ContactSection extends Component {
  static propTypes = {};
  static componentName = 'ContactSection';

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    return (
      <section id="contact" className="contact bg-primary">
        <div className="container">
          <h2>We <i className="fa fa-heart"></i> new friends!</h2>
          <ul className="list-inline list-social">
            <li className="list-inline-item social-twitter">
              <a href="#"><i className="fa fa-twitter"></i></a>
            </li>
            <li className="list-inline-item social-facebook">
              <a href="#"><i className="fa fa-facebook"></i></a>
            </li>
            <li className="list-inline-item social-google-plus">
              <a href="#"><i className="fa fa-google-plus"></i></a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ContactSection;
