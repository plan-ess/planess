
import React, { Component } from 'react';
import ProductRow from './ProductRow';

class Initial extends Component {
  render() {
    let tableData;
    let filtered = this.props.products.data.filter(product =>
      product.name.toLowerCase().includes(this.props.query.toLowerCase())
    );

    {
      this.props.onStock &&
        (filtered = filtered.filter(product => product.stocked));
    }

    tableData = filtered.map((product, index) => {
      return <ProductRow key={index} product={product} />;
    });

    return (
      <div>
        <ul>
          <li>Sign Up</li>
          <li>Log In</li>
        </ul>
      </div>
    );
  }
}

export default ProductTable;