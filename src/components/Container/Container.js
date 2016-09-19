import classNames from 'classnames';
import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class Container extends React.Component {
  static get propTypes() {
    return {
      fluid: React.PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      fluid: false,
    };
  }

  render() {
    const className = classNames({
      [Bootstrap['container-fluid']]: this.props.fluid,
      [Bootstrap.container]: !this.props.fluid,
    }, this.props.className);

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
