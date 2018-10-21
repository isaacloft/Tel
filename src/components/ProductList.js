import React from 'react';
import Product from './Product';
import { TELSTRA_ITEMS } from './productsData';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { telstraItems: TELSTRA_ITEMS };
  }

  render() {
    const { telstraItems } = this.state;
    return telstraItems.map(item => {
      const { isPublished } = item;
      // console.log(item);

      return (
        <div key={item.productName}>
          <Product item={item} isPublished={isPublished} />
        </div>
      );
    });
  }
}
