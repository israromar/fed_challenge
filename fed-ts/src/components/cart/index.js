import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form"
import './cart.css'
import {connect} from 'react-redux'
import {addItem} from '../../store/actions/cart'
import blue_shirt from "../../assets/images/blue-shirt.png";
import blue_socks from "../../assets/images/blue-socks.png";
import red_shirt from "../../assets/images/red-shirt.png";
import CartItem from './CartItem.tsx'
import StripeButton from '../stripe/index.tsx'
import {withRouter} from 'react-router-dom'

const img= [ red_shirt,blue_shirt , blue_socks]
 function index(props) {
     console.log('props', props)
    return (
         <div className="checkout-wrap">
                <div className="checkout-head">
                    <div className="container-fluid">
                        <h2>Assemble Store</h2>
                    </div>
                </div>
                <div className="table-section">
                    <div className="container-fluid">
                        <div className="cart-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <h3>Your Cart</h3>
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    props.cart.map((item, index)=>{
                                        return <CartItem img={img[index]} {...item}/>
                                    })
                                }
                                    
                    
                                    <tr>
                                        <td></td>
                                        <td>
                                            <span>Subtotal</span>
                                        </td>
                                        <td>
                                            <span className="amount">$120.00</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="checkout-btn-row">
                            <StripeButton/>
                                {/* <button onClick={()=>{props.history.push('/billing')}} className="checkout-btn">Checkout</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Checkout Cart End */}

                
            </div>
    )
}



const mapStateToProps = (state, ownProps) => ({
  cart: state.cart
})


const mapDispatchToProps = dispatch => {
  return {
  
   addToCart: (data) => dispatch(addItem(data))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))