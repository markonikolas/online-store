import React, { Component, Fragment } from 'react';
import _ from 'lodash';

import 'animate.css';

/* Components */
import Header from './components/header';
import Landing from './components/landing';
import Products from './components/products';
import ButtonToTop from './components/buttonToTop';
import Footer from './components/footer';

class OnlineStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db: [],
    };
    this.showToTopButton = this.showToTopButton.bind(this);
    this.addProperties = this.addProperties.bind(this);
    this.cartItem = this.cartItem.bind(this);
    this.showToTopButton = this.showToTopButton.bind(this);
    /* refs */
    this.buttonToTopRef = React.createRef();
  }

  /* lifecycle methods */
  componentDidMount() {
    /* fetch all products */
    fetch('./db/products.json')
      .then((res) => res.json())
      /* add aditional properties */
      .then((data) => this.addProperties(data))
      .then((res) => this.setState(() => ({ db: [...res] })));

    window.addEventListener('scroll', this.showToTopButton, 0, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showToTopButton, false);
  }

  /* methods */
  showToTopButton(e) {
    e.preventDefault();
    const button = this.buttonToTopRef.current.classList;
    window.scrollY > 500 ? button.add('show') : button.remove('show');
  }

  addProperties(db) {
    db.forEach((item) => {
      Object.defineProperties(item, {
        inCart: {
          value: true,
          writable: true,
          enumerable: true,
        },
        quantity: {
          value: 1,
          writable: true,
          enumerable: true,
        },
      });
    });
    return db;
  }

  cartItem(id) {
    const { db } = this.state;
    const item = _.find(db, (prop) => prop.id === id);

    const updateDB = () => {
      const itemIndex = _.findIndex(db, item);
      const chunk1 = _.take(db, itemIndex);
      const chunk2 = _.takeRight(db, db.length - itemIndex - 1);
      this.setState(() => ({
        db: [...chunk1, item, ...chunk2],
      }));
    };

    return {
      subtotal: item.quantity * item.price,
      data: item,
      increment: () => {
        return item.quantity < 10 ? item.quantity++ && updateDB() : null;
      },
      decrement: () => {
        return item.quantity > 1 ? item.quantity-- && updateDB() : null;
      },
      toggle: () => {
        if (item.inCart) {
          item.inCart = false;
        } else {
          item.inCart = true;
        }
        updateDB();
      },
    };
  }

  render() {
    const { db } = this.state;
    const { buttonToTopRef, cartItem } = this;
    const cartItems = _.filter(
      db,
      (item) => item.inCart,
    ); /* toggle all for testing */
    return (
      <Fragment>
        <Header cartItem={cartItem} cartItems={cartItems} />
        <Landing />
        <ButtonToTop buttonRef={buttonToTopRef} />
        <Products db={db} name="products" cartItem={cartItem} />
        <Footer />
      </Fragment>
    );
  }
}

export default OnlineStore;
