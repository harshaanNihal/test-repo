import React, { Component} from 'react';
import Items from "./Items";

import './App.css';

class ProductsContainer extends Component {


  render() {
    let ItemsArr = this.props.productList.map(v => <Items addToCart={this.props.addToCart} proItem={v}/>)
    return (
      <div className="prod-wrapper">
      {ItemsArr}
      </div>
    );
  }
}

export default ProductsContainer;
