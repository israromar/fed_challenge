import React from "react";
import {
  Link
} from "react-router-dom";



export default function index() {
    return (

        <ul>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <Link to="/billing">Billing</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
    )
}
