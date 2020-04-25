import React, { Component, Fragment } from 'react';
import { configureAnchors, goToAnchor } from 'react-scrollable-anchor';

/* Components */
import Header from './components/header';
import Landing from './components/landing';
import Products from './components/products';
import Footer from './components/footer';

class OnlineStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      db: [],
    };
    this.setOpen = this.setOpen.bind(this);
  }

  componentDidMount() {
    configureAnchors({ offset: -40, scrollDuration: 1500 });
    fetch('./db/products.json')
      .then((res) => res.json())
      .then((res) => this.setState(() => ({ db: [...res] })));
  }

  setOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Fragment>
        <Header open={this.state.open} setOpen={this.setOpen} />
        <Landing
          open={this.state.open}
          onClick={() => goToAnchor('products', false)}
        />
        <Products db={this.state.db} />
        <Footer />
      </Fragment>
    );
  }
}

export default OnlineStore;
