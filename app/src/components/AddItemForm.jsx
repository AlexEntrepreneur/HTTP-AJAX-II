import React from 'react';

class AddItemForm extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h2>Add New Item</h2>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={(event) => this.props.onFormChange(event, 'itemToAdd')}
          />
          <div className="baseline" />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={(event) => this.props.onFormChange(event, 'itemToAdd')}
          />
          <div className="baseline" />

          <input
            type="text"
            name="imageUrl"
            placeholder="Image"
            onChange={(event) => this.props.onFormChange(event, 'itemToAdd')}
          />
          <div className="baseline" />

          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={(event) => this.props.onFormChange(event, 'itemToAdd')}
          />
          <div className="baseline" />

          <input
            type="text"
            name="shipping"
            placeholder="Shipping"
            onChange={(event) => this.props.onFormChange(event, 'itemToAdd')}
          />
          <div className="baseline" />

          <button className="md-button form-button">Add New Item</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;