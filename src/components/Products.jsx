import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
      { id: 4, name: "Product 4" },
    ],
  };
  render() {
    return (
      <>
        <h4>All Products</h4>
        <nav className="navbar-secondary">
          <ul>
            {this.state.products.map((product) => (
              <ul key={product.id}>
                <Link to={`${product.id}`}>{product.name}</Link>
              </ul>
            ))}
          </ul>
        </nav>
        {/* <Outlet/> */}
      </>
    );
  }
}

export default Products;
