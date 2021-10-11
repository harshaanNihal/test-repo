import React, { Component, Fragment } from 'react';
import ProductsContainer from "./ProductsContainer";
import Sizes from "./Sizes";
import Cart from "./Cart";

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      cartList: [],
      cartShow: false,
      size: [{ val: "XS", done: false }, { val: "S", done: true }, { val: "M", done: false }, { val: "ML", done: false }, { val: "L", done: false }, { val: "XL", done: false }, { val: "XXL", done: false }]
    }
  }

  checkboxClicked = (e) => {
    console.log(this);
    let id = e.target.id;
    let arrSize = this.state.size.slice();
    arrSize[id].done = !this.state.size[id].done;
    this.setState({ size: arrSize });
  }

  sizeFiltered() {
    let filteredArr = [];
    let actSize = this.state.size.filter(v => v.done);
    actSize.forEach(v => {
      let xArr = this.EachSizeFilter(v.val);
      xArr.forEach(element => {
        if (!filteredArr.includes(element)) {
          filteredArr.push(element)
        };
      });
    })
    filteredArr = (filteredArr.length) ? filteredArr : [...this.state.productList];
    return filteredArr;
  }

  EachSizeFilter(val) {
    return this.state.productList.filter(v => v.availableSizes.includes(val));
  }

  addToCart = (id) => {
    this.state.productList.forEach((obj) => {
      if (obj.id === id) this.state.cartList.push(obj);
    })
    this.setState({ cartList: this.state.cartList });
  }
  delToCart = (id) => {
    this.state.cartList.forEach((obj ,i) => {
      if (obj.id === id) this.state.cartList.splice(i,1);
    })
    this.setState({cartList: this.state.cartList});
  }
  toggleCartShow = () => {
    this.state.cartShow = !this.state.cartShow;
    this.setState({ cartShow: this.state.cartShow })
  }

  componentWillMount() {
    fetch("https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json")
      .then(r => r.json())
      .then(prod => {
        this.setState({
          productList: prod.products
        })
      });
  }
  render() {
    var filtered = this.sizeFiltered();
    return (
      <Fragment>
        <Sizes size={this.state.size} checkboxClicked={this.checkboxClicked} />
        <h4>{filtered.length} Products Found</h4>
        <ProductsContainer addToCart={this.addToCart} productList={filtered} />
        <Cart delToCart={this.delToCart} cartList={this.state.cartList} show={this.state.cartShow} toggleCartShow={this.toggleCartShow} />
      </Fragment>
    );
  }
}

export default App;
