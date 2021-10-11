import React, { Component, Fragment } from 'react';
import CartItem from "./CartItem";

class Show extends Component {
  constructor(props){
    super(props);
    this.state ={
      total: 0,
    }
  }
  checkout(x){
    alert("total = " + x);
  }
  render() {
    var x = 0;
    var ShowList = this.props.cartList.map((v)=>{
        x += (+v.price)
      return <CartItem delToCart={this.props.delToCart} item={v}/>
    }) 

    return (
      <Fragment>
        <div className="cart_sec">
          <button onClick={this.props.toggleCartShow}>X</button>
          <div class="cart_sec_Header">
            <span class="bag">
            </span>
          </div>
          <div class="cart_sec_shelf-container">
          {ShowList}
          </div>
          <div class="cart_sec_footer">
            <div class="sub">SUBTOTAL</div>
            <div class="sub-price">
              <p class="sub-price__val">{x}$</p>
              <small class="sub-price__installment">
                <span>Click checkout to pay</span>
              </small>
            </div>
            <div class="buy-btn" onClick={() =>this.checkout(x)}>Checkout</div>

          </div>
        </div>
      </Fragment>
    )
  }
}

export default Show;