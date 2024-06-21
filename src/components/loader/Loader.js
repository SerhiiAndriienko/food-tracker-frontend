import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Overlay } from './Loader.styled';

class Loader extends Component {
  render() {
    return (
      <Overlay id="overlay">
        <ThreeDots
          height={100}
          width={100}
          radius={5}
          color="#E3FFA8"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Overlay>
    );
  }
}

export default Loader;
