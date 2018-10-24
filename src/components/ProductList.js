import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    // console.log("@", this.props);
    const { availableItems } = this.props;
    return availableItems.map(item => {
      const { isPublished } = item;
      // console.log(item);
      if (isPublished === 'true') {
        return (
          <section key={item.productName}>
            <Product item={item} />
          </section>
        );
      }
    });
  }
}

const mapStateToProps = state => ({
  availableItems: state.availableItems,
});

export default connect(
  mapStateToProps,
  actions,
)(ProductList);
