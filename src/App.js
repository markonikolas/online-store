import React, { Component, Fragment } from 'react';

/* Components */
import Header from './components/header';
import Landing from './components/landing';
import Footer from './components/footer';

class OnlineStore extends Component {
  state = {
    open: false,
  };
  render() {
    return (
      <Fragment>
        <Header open={this.state.open} />
        <Landing />
        <Footer />
      </Fragment>
    );
  }
}

export default OnlineStore;
