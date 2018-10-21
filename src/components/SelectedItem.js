import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';

class SelectedItem extends Component {
  constructor(props) {
    super(props);
    const productInfo = props.productInfo;
    const indexKey = props.indexKey;

    this.state = { productInfo, indexKey };
  }

  handleAddRemoveFromCart = event => {
    event.preventDefault();
    const indexKey = this.state.indexKey;
    const productInfo = this.state.productInfo;
    this.props.addAvailableItem(productInfo);
    this.props.removeSelectedItem(indexKey);
  };

  render() {
    const { productName } = this.state.productInfo;
    return (
      <div className="selectedItemWrapper">
        <div className="selectedProduct">
          <div className="productContent">
            <div className="selectedProductName">{productName}</div>
            <div className="selectedProductBtn">
              <a className="buttonRm" onClick={this.handleAddRemoveFromCart}>
                Remove
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(SelectedItem);
