import React, { PropTypes, Component } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

class CtaSection extends Component {
  static propTypes = {};
  static componentName = 'CtaSection';

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
  }

  render() {
    return (
      <section className="cta">
        <div className="cta-content">
          <div className="container">
            <h2>Stop waiting.<br />Start building.</h2>
            <a href="#contact" className="btn btn-outline btn-xl page-scroll">Let's Get Started!</a>
          </div>
        </div>
        <div className="overlay"></div>
      </section>
    );
  }
}

export default CtaSection;
