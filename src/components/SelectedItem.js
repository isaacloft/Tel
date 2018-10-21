import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';

class SelectedItem extends Component {
  constructor(props) {
    super(props);
    // console.log("!!",props);
    const productInfo = props.productInfo;
    const indexKey = props.indexKey;
    //   console.log("222", props);

    this.state = { productInfo, indexKey };
  }

  handleAddRemoveFromCart = event => {
    event.preventDefault();
    const indexKey = this.state.indexKey;
    console.log('click', indexKey);
    this.props.removeItem(indexKey);
  };

  render() {
    const { productName } = this.state.productInfo;

    console.log(productName);

    return (
      <div>
        <div>{productName}</div>
        <button onClick={this.handleAddRemoveFromCart}>Remove</button>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(SelectedItem);
