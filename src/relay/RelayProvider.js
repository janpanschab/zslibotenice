// @flow

import React from 'react';
import PropTypes from 'prop-types';

// Thank you https://github.com/robrichard
// https://github.com/robrichard/relay-context-provider

class RelayProvider extends React.Component {
  getChildContext() {
    const { environment, variables } = this.props;
    return {
      relay: {
        environment,
        variables,
      },
    };
  }

  render() {
    return this.props.children; // eslint-disable-line react/destructuring-assignment
  }
}

RelayProvider.childContextTypes = {
  relay: PropTypes.object.isRequired,
};

export default RelayProvider;
