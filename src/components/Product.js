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
    return (
      <section key={productName} className="productWrapper">
        <p className="productName">{productName}</p>
        <figure className="productImg">
          <img src={productImage} alt={`This is an image of ${productName}`} />
        </figure>
        <p className="productPrice">{productPrice}</p>
        <section
          className="addToCartBtn
            ">
          <a className="buttonAdd" onClick={this.handleAddToCart}>
            Add to cart
          </a>
        </section>
      </section>
    );
  };
  render() {
    return <section>{this.renderProduct()}</section>;
  }
}

export default connect(
  null,
  actions,
)(Product);
