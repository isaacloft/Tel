import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions/index';
import SelectedItem from './SelectedItem';

class SelectedList extends Component {
  constructor(props) {
    super(props);
    // console.log('!!!', props);
    const selectedItems = [];
    this.state = { selectedItems };
  }

  componentDidMount() {
    const { selectedItems } = this.props;
    this.setState = { selectedItems };
  }

  render() {
    const { selectedItems } = this.props;
    // console.log(selectedItems);
    if (selectedItems.length < 1) {
      return <div>Your shopping cart is empty.</div>;
    }

    return selectedItems.map((item, index) => {
      const notTheBestKey = `${index}${item.productName}`;
      return (
        <section key={notTheBestKey}>
          <SelectedItem productInfo={item} indexKey={index} />
        </section>
      );
    });
  }
}

const mapStateToProps = state => ({
  selectedItems: state.selectedItems,
});

export default connect(
  mapStateToProps,
  actions,
)(SelectedList);
