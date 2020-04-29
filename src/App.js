import React, { Component, Fragment } from 'react';
import 'animate.css';
import _, { throttle, debounce } from 'lodash';
import { calculateSubtotals } from './helpers/helpers';

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
      open: false /* needs work, probably dont need state for menu */,
      db: [],
    };
    this.setOpen = this.setOpen.bind(this);
    this.showToTopButton = this.showToTopButton.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
    this.toggleCartItem = this.toggleCartItem.bind(this);

    this.handleButtonVisibility = debounce(
      throttle(this.showToTopButton, 100),
      200,
    );

    this.handleProductExpand = debounce(
      throttle(this.handleProductClick, 100),
      200,
    );

    /* refs */
    this.productsRef = React.createRef();
    this.buttonToTopRef = React.createRef();
  }

  /* lifecycle methods */
  componentDidMount() {
    fetch('./db/products.json')
      .then((res) => res.json())
      .then((res) => this.setState(() => ({ db: [...res] })));
    window.addEventListener('scroll', this.handleButtonVisibility, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleButtonVisibility, false);
  }

  /* methods */
  setOpen() {
    this.setState({ open: !this.state.open });
  }

  showToTopButton(e) {
    /* needs work */
    e.preventDefault();
    const button = this.buttonToTopRef.current.classList;
    window.scrollY > 500 ? button.add('show') : button.remove('show');
  }

  handleProductClick({ currentTarget }) {
    /* needs work */
    // this.productsRef.current.childNodes.forEach((child) =>
    //   child.classList.remove('expand'),
    // );
    // scroller.scrollTo('products', { offset: -40 });
    // currentTarget.classList.add('expand');
  }

  toggleCartItem(id) {
    const { db } = this.state;

    const item = _.find(db, (item) => item.id === id);
    const itemIndex = _.findIndex(db, item);

    const chunk1 = _.take(db, itemIndex);
    const chunk2 = _.takeRight(db, db.length - itemIndex - 1);

    if (item.inCart) {
      item.inCart = false;
    } else {
      item.inCart = true;
    } /* needs work */
    this.setState(() => ({ db: [...chunk1, item, ...chunk2] }));
  }

  render() {
    const { db, open } = this.state;
    const {
      setOpen,
      productsRef,
      buttonToTopRef,
      toggleCartItem,
      handleProductClick,
    } = this;
    const items = _.filter(db, (item) => item.inCart);
    const cartItems = calculateSubtotals(items);
    return (
      <Fragment>
        <Header
          open={open}
          setOpen={setOpen}
          cartItems={cartItems}
          removeItemFromCart={this.toggleCartItem}
        />
        <Landing open={open} />
        <ButtonToTop buttonRef={buttonToTopRef} />
        <Products
          db={db}
          name="products"
          productsRef={productsRef}
          onProductClick={handleProductClick}
          addItemToCart={toggleCartItem}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default OnlineStore;
