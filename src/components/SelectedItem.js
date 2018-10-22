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
      <section className="selectedItemWrapper">
        <section className="selectedProduct">
          <section className="productContent">
            <article className="selectedProductName">
              <p>{productName}</p>
            </article>
            <section className="selectedProductBtn">
              <a className="buttonRm" onClick={this.handleAddRemoveFromCart}>
                Remove
              </a>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default connect(
  null,
  actions,
)(SelectedItem);
