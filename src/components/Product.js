import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';

class Product extends React.Component {
  constructor(props) {
    super(props);
    const productInfo = props.item;
    const isPublished = props.isPublished;
    this.state = { productInfo, isPublished };
  }

  handleAddToCart = event => {
    event.preventDefault();
    this.props.saveSelectedItem(this.state.productInfo);
    this.props.removeAvailableItem(this.state.productInfo);
  };

  renderProduct = () => {
    const { productName, productImage, price } = this.state.productInfo;
    const isPublished = this.state.isPublished;
    const productPrice = `$${price}`;
    if (isPublished === 'false') {
      return (
        <div />
        // <div key={productName} className="productWrapper comingSoon">
        //   <div className="productName">{productName}</div>
        //   <div className="productImg">
        //     <img src={productImage} />
        //   </div>
        //   <div className="productPrice">{productPrice}</div>
        //   <div
        //     className="addToCartBtn
        //     ">
        //     <button disabled>Coming Soon</button>
        //   </div>
        // </div>
      );
    }
    return (
      <div key={productName} className="productWrapper">
        <div className="productName">{productName}</div>
        <div className="productImg">
          <img src={productImage} />
        </div>
        <div className="productPrice">{productPrice}</div>
        <div
          className="addToCartBtn
            ">
          <a className="buttonAdd" onClick={this.handleAddToCart}>
            Add to cart
          </a>
        </div>
      </div>
    );
  };
  render() {
    return <div>{this.renderProduct()}</div>;
  }
}

export default connect(
  null,
  actions,
)(Product);
