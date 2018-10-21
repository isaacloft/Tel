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
    this.props.removeItem(indexKey);
  };

  render() {
    const { productName } = this.state.productInfo;
    return (
      <div className="selectedItemWrapper">
        <div className="selectedProduct">
          <div class="productContent">
            <div class="selectedProductName">{productName}</div>
            <div class="selectedProductBtn">
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
