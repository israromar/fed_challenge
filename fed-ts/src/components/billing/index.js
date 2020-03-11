import React from 'react'
import Button from 'react-bootstrap/Button';
import './billing.css'
import Form from "react-bootstrap/Form"
import {connect} from 'react-redux'
import {addItem} from '../../store/actions/cart'
import {withRouter} from 'react-router-dom'
 function index(props) {
     console.log(props)
    return (
       <div className="checkout-form">
                    <div className="checkout-head">
                        <div className="container-fluid">
                            <h2>Assemble Store</h2>
                        </div>
                    </div>
                    <div className="form-outer">
                        <div className="container-fluid">
                            <div className="title">
                                <h3>Checkout</h3>
                            </div>
                            <div className="form-inner">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Paymnet Information</h4>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Name On Card</Form.Label>
                                                <Form.Control type="text" placeholder="Name On Card" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicNumber">
                                                <Form.Label>Card Number</Form.Label>
                                                <Form.Control type="text" placeholder="xxxxxxxxxxxxxxxxxxxxx" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Card Number</Form.Label>
                                                <div className="forms-row">
                                                    <Form.Control type="number" placeholder="MM" />
                                                    <Form.Control type="number" placeholder="YYYY" />
                                                </div>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control type="number" placeholder="City" />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Shipping Address</h4>
                                        <Form>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Name" />
                                            </Form.Group>

                                            <Form.Group controlId="formBasicNumber">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" placeholder="Address" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicNumber">
                                                <Form.Label>Apt/suite/etc</Form.Label>
                                                <Form.Control type="text" placeholder="Apt/suite/etc" />
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>CVV</Form.Label>
                                                <Form.Control type="number" placeholder="City" />
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Country</Form.Label>
                                                <Form.Control as="select">
                                                <option>United States</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>State</Form.Label>
                                                <Form.Control as="select">
                                                <option>State</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>ZIP Code</Form.Label>
                                                <Form.Control type="number" placeholder="ZIP Code" />
                                            </Form.Group>

                                            

                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Billing address same as shipping" />
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <div className="checkout-footer">
                                <Button onClick={()=>props.history.push('/order')} variant="primary" type="submit">
                                    Place Order
                                </Button>
                            </div>
                        </div>
                    </div>
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