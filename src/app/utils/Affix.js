import React, { Component, PropTypes } from 'react';

class Affix extends Component {
  static propTypes = {
    offset: PropTypes.number,
    affixClassName: PropTypes.string,
    tagName: PropTypes.string,
  };

  static defaultProps = {
    offset: 0,
    affixClassName: 'affix',
    tagName: 'div',
  };

  constructor() {
    super();
    this.state = {
      affix: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const affix = this.state.affix;
    const offset = this.props.offset;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true,
      });
    }

    if (affix && scrollTop < offset) {
      this.setState({
        affix: false,
      });
    }
  };

  render() {
    const { className, affixClassName, tagName, ...props } = this.props;
    const affix = this.state.affix ? affixClassName : '';

    const Tag = `${tagName}`;

    return (
      <Tag {...props} className={`${className || ''} ${affix}`}>
        {this.props.children}
      </Tag>
    );
  }
}

export default Affix;
