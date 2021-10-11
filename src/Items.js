import React, { Component} from 'react';

import './App.css';

class Items extends Component {


  render() {
    const {title,sku,price,id } = this.props.proItem;
    const srcImg = `./media/products/${sku}.jpg`
    return (
      <div>
        <img src={require(`${srcImg}`)} alt="T-shirt"></img>
        <h2>{title}</h2>
        <p>{price}</p>
        <button id={id} onClick={() =>this.props.addToCart(id)}>Add To Cart</button>
      </div>
    );
  }
}

export default Items;
