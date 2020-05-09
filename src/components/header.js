import React, { Component } from 'react';
import _ from 'lodash';
import { debounceAndThrottle as delay } from '../helpers/helper';
/* Components */
import ShoppingCart from './shoppingCart';
import Navigation from './navigation';
import Button from './button';
import Icon from './icons/icon';
import BadgeIcon from './icons/badgeIcon';

/* Icons */
import ShoppingCartSVG from '../assets/icons/shopping-cart.svg';
import UserSVG from '../assets/icons/user.svg';
import MenuSVG from '../assets/icons/menu.svg';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 3,
      cart: { type: 'cart', isOpen: true },
      navigation: { type: 'navigation', isOpen: false },
      userDetails: {
        firstName: '',
        lastName: '',
        state: '',
        city: '',
        zip: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setMenuOpen = this.setMenuOpen.bind(this);
    this.setPageNumber = this.setPageNumber.bind(this);
    this.ID = this.ID.bind(this);
    this.resetOrder = this.resetOrder.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState(() => ({
      userDetails: Object.assign(this.state.userDetails, {
        [e.target.name]: e.target.value,
      }),
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    const { userDetails, pageNumber } = this.state;
    const value = _.find(
      Object.keys(userDetails),
      (item) => !userDetails[item],
    );
    const formIsValid = (() => {
      return value === undefined ? true : false;
    })();
    /* skips enter details if already entered */
    if (pageNumber === 1 && formIsValid) {
      this.setState(() => ({
        pageNumber: pageNumber + 1,
        orderID: this.ID(),
      }));
    }
  }
  ID() {
    return (() => Math.random().toString(36).substr(2))();
  }
  setMenuOpen({ type }) {
    this.setState(() => {
      return { [type]: { type, isOpen: !this.state[type].isOpen } };
    });
  }
  setPageNumber() {
    const next = () => set(1);
    const prev = () => set(-1);
    const reset = () => this.setState(() => ({ pageNumber: 0 }));
    const set = (value) =>
      this.setState((prevState) => ({
        pageNumber: prevState.pageNumber + value,
      }));

    return {
      next,
      prev,
      reset,
    };
  }

  resetOrder() {
    const { cartItem, cartItems } = this.props;
    cartItems.forEach((item) => cartItem(item.id).toggle());
    setTimeout(() => {
      this.setState(() => ({
        pageNumber: 0,
        cart: { type: 'cart', isOpen: false },
        navigation: { type: 'navigation', isOpen: false },
      }));
    }, 1000); /* PROBLEM WITH THIS METHOD, KEEPS RE-RENDERING FOR A FEW SECONDS */
  }

  render() {
    const {
      setMenuOpen,
      setPageNumber,
      handleSubmit,
      handleChange,
      resetOrder,
      props: { cartItem, cartItems },
      state: { cart, navigation, pageNumber, userDetails, orderID },
    } = this;

    return (
      <header className={navigation.isOpen ? 'is-opened' : ''}>
        <div
          className={`header-container container-fluid d-flex justify-content-between flex-wrap`}>
          <div className="logo">
            <h1>Online Store</h1>
          </div>

          <ul className="icons d-flex justify-content-between align-items-center">
            <Button onClick={delay(() => setMenuOpen(cart))}>
              <BadgeIcon
                name={ShoppingCartSVG}
                alt="Shopping Cart"
                badgeNumber={cartItems.length}
              />
            </Button>

            <Button>
              <Icon name={UserSVG} alt="User" />
            </Button>

            <Button onClick={delay(() => setMenuOpen(navigation))}>
              <Icon name={MenuSVG} alt="Menu" />
            </Button>
          </ul>
          <Navigation navigationOpen={navigation} />
        </div>

        <ShoppingCart
          resetOrder={resetOrder}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          cartOpen={cart.isOpen}
          cartItem={cartItem}
          cartItems={cartItems}
          closeCart={() => setMenuOpen(cart)}
          onChange={handleChange}
          onSubmit={handleSubmit}
          userDetails={userDetails}
          orderID={orderID}
        />
      </header>
    );
  }
}

export default Header;
