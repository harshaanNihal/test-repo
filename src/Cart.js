import React, { Component, Fragment } from 'react';
import Show from "./Show";

class Cart extends Component {

  render() {
    let show = <Show cartList={this.props.cartList} delToCart={this.props.delToCart} toggleCartShow={this.props.toggleCartShow} />
    let hide = (<button onClick={this.props.toggleCartShow} className="cartBtn">Cart</button>
);
    var x = (this.props.show) ? show :hide;
    return (
      <Fragment>
        {x}
      </Fragment>
    )
  }
}

export default Cart;