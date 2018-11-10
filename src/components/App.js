import React from 'react';
import ProductList from 'components/ProductList';
import SelectedList from 'components/SelectedList';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
class App extends React.Component {
  componentWillMount() {
    this.props.fetchAvailableItems();
  }
  render() {
    return (
      <section>
        <section>
          <header className="header">
            <article />
          </header>
        </section>
        <section>
          <nav />
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
  }
}
export default connect(
  null,
  actions,
)(App);
