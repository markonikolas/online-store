import React from 'react';
import CartPageTitle from './cartPageTitle';
const userDetails = ({
  className,
  closeCart,
  onSubmit,
  onChange,
  firstName,
  lastName,
  state,
  city,
  zip,
}) => {
  return (
    <div className={'container-fluid ' + className}>
      <CartPageTitle text="Enter Your Details" onClick={closeCart} />
      <form id="form" onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              name="firstName"
              onChange={onChange}
              className="form-control"
              id="firstname"
              value={firstName}
              required
            />
            <div className="invalid-feedback">
              Please provide a valid first name.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              name="lastName"
              onChange={onChange}
              className="form-control"
              id="lastname"
              value={lastName}
              required
            />
            <div className="invalid-feedback">
              Please provide a valid last name.
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-3 mb-3">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              onChange={onChange}
              className="form-control"
              id="city"
              value={city}
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="state">State</label>
            <select
              name="state"
              onChange={onChange}
              className="custom-select"
              id="state"
              required>
              <option value={state}></option>
              <option>Serbia</option>
              <option>Serbia</option>
              <option>Serbia</option>
            </select>
            <div className="invalid-feedback">Please select a state.</div>
          </div>
          <div className="col-md-2 mb-3">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              name="zip"
              onChange={onChange}
              className="form-control"
              id="zip"
              value={zip}
              required
            />
            <div className="invalid-feedback">Please provide a valid zip.</div>
          </div>
        </div>

        <input type="submit" id="submit" style={{ display: 'none' }} />
      </form>
    </div>
  );
};

export default userDetails;
