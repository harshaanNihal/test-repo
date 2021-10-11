import React, { Component, Fragment } from 'react';
import Sizebox from "./Sizebox";

class Sizes extends Component {

  

  render() {
    const {checkboxClicked, size} =this.props;
    let rndrSize = size.map((v, i)=> {
      return <Sizebox key={v.val} siz={v.val} val={v.done} ids={i} checkboxClicked={checkboxClicked} /> 
    })
    return (
      <Fragment>
      <h4>Sizes:</h4>
        <div className="size-block">
        {rndrSize} 
      </div>
      </Fragment>
    );
  }
}

export default Sizes;
