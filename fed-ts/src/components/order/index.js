import React from "react";
import Button from "react-bootstrap/Button";
import "./order.css";
import { connect } from "react-redux";
import { addItem } from "../../store/actions/cart";
import {withRouter} from 'react-router-dom'
function index(props) {
  console.log("cart", props.cart);
  return (
    <div>
      <div className="checkout-head">
        <div className="container-fluid">
          <h2>Assemble Store</h2>
        </div>
      </div>
      <div className="order-complete">
        <div className="container-fluid">
          <div class="title">
            <h3>Order Complete</h3>
          </div>
          <div className="complete-info">
            <p>Hooray! Way to order those products.</p>
            <button onClick={()=>{props.history.push('/')}} className="checkout-btn">GO HOME</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    addToCart: data => dispatch(addItem(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index));
