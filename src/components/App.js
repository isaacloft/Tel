import React from 'react';
import ProductList from 'components/ProductList';
import SelectedList from 'components/SelectedList';

export default () => {
  return (
    <section>
      <section>
        <header>
          <article>This is header</article>
        </header>
      </section>
      <section>
        <nav>
          <a href="">Home</a> | <a href="">Products</a> | <a href="">Plans</a>
        </nav>
      </section>
      <main className="mainContainer">
        <section className="mainDisplay">
          <section className="itemsContainer">
            <ProductList />
          </section>
          <section className="cartContainer">
            <section className="cartContent">
              <article>
                <header>
                  <p className="cartHeaderText">
                    <b>Shopping Cart</b>
                  </p>
                </header>
              </article>
              <SelectedList />
            </section>
          </section>
        </section>
      </main>
      <section>
        <footer>
          <p>Telstra Code Challenge by Isaac Guan</p>
          <p>
            Contact information:
            <a href="mailto:isaac.guan@rxpservices.com">Email</a>|{' '}
            <a href="https://www.linkedin.com/in/isaacguanloft/">Linkedin</a>
          </p>
        </footer>
      </section>
    </section>
  );
};
