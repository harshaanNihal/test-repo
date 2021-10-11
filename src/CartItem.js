import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { title, sku, price, id } = this.props.item;
    return (
      <div class="cartItems">
        <button id={id} onClick={() => this.props.delToCart(id)} class="cartItems_del">del</button>
        <div class="check-item">
          <img src={require(`./media/products/${sku}.jpg`)} />
        </div>
        <div class="shelf-item__details">
          <p class="title">Dark Thug Blue-Navy T-Shirt</p>
          <p class="desc">M | Front print and paisley print <br />Quantity: 11</p>
        </div>
        <div class="shelf-item__price">
          <p>$  29.45</p>
        </div>
        <div class="clearfix"></div>
      </div>


    )
  }
}
export default CartItem;






