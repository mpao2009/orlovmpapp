import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <div class="alert alert-primary container-fluid" role="alert">
      <h1>Bienvenidos!!!</h1>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;