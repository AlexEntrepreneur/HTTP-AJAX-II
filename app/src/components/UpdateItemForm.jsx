import React from 'react';

class UpdateItemForm extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h2>Update Item</h2>
        <form onSubmit={(event) => this.props.onFormSubmit(event, 'updateForm')}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.props.itemToUpdate.name}
            onChange={(event) => this.props.onFormChange(event, 'itemToUpdate')}
          />
          <div className="baseline" />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={this.props.itemToUpdate.price}
            onChange={(event) => this.props.onFormChange(event, 'itemToUpdate')}
          />
          <div className="baseline" />

          <input
            type="text"
            name="imageUrl"
            placeholder="Image"
            value={this.props.itemToUpdate.imageUrl}
            onChange={(event) => this.props.onFormChange(event, 'itemToUpdate')}
          />
          <div className="baseline" />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.props.itemToUpdate.description}
            onChange={(event) => this.props.onFormChange(event, 'itemToUpdate')}
          />
          <div className="baseline" />

          <input
            type="text"
            name="shipping"
            placeholder="Shipping"
            value={this.props.itemToUpdate.shipping}
            onChange={(event) => this.props.onFormChange(event, 'itemToUpdate')}
          />
          <div className="baseline" />

          <button className="md-button form-button">Update Item</button>
        </form>
      </div>
    );
  }
}

export default UpdateItemForm;