import React from "react";

export default function CartItem(props: any) {
  const { name, sku, unitPrice, quantity, img } = props;
  return (
    <tr>
      <td>
        <div className="your-cart">
          <div className="cart-image">
            <img alt="img" src={img} />
          </div>
          <div className="cart-info">
            <h4>{name}</h4>
            <span>SKU #{sku}</span>
          </div>
        </div>
      </td>
      <td>
        <span>{quantity}</span>
      </td>
      <td>
        <span className="amount">${unitPrice}</span>
      </td>
    </tr>
  );
}
