import React from 'react';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import Item from './components/Item';
import AddItemForm from './components/AddItemForm';
import UpdateItemForm from './components/UpdateItemForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      itemToAdd: {
        name: '',
        price: null,
        imageUrl: '',
        desciption: '',
        shipping: ''
      },
      itemToUpdate: null
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3333/items')
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(error => {
        console.log(error);
      })
  }

  onFormChange = (event, sliceOfState) => {
    event.persist();
    this.setState(prevState => ({
      [sliceOfState]: {
        ...prevState[sliceOfState],
        [event.target.name]: event.target.value
      }
    }));
  }

  onFormSubmit = (event, formName) => {
    event.preventDefault();
    if(formName === 'addForm') {
      // fire addItem function
      this.addItem();
    }
    else if (formName === 'updateForm') {
      // fire updateItem function
      console.log('Item Updated!');
    }
  }

  addItem = () => {
    axios
    .post('http://localhost:3333/items', this.state.itemToAdd)
    .then(res => {
      this.setState({
        items: res.data,
        itemToAdd: {
          name: '',
          price: null,
          imageUrl: '',
          desciption: '',
          shipping: ''
        }
      });
      this.props.history.push('/item-list');
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteItem = (id) => {
    axios
      .delete(`http://localhost:3333/items/${id}`)
      .then(res => {
        this.props.history.push('/item-list');
        this.setState({
          items: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link className="some-link" to="/">
            <h1 className="store-header">Trinkets</h1>
          </Link>
          <div className="nav-links">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/item-list">
              Shop
            </NavLink>
            <NavLink to="/add-item">
              <button className="md-button">Add Item</button>
            </NavLink>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        <Route 
          exact 
          path="/item-list"
          render={(props) => <ItemsList {...props} items={this.state.items} />} 
        />
        <Route 
          path="/item-list/:id" 
          render={(props) => <Item 
            items={this.state.items}
            deleteItem={this.deleteItem}
            {...props} 
            />}
        />
        <Route
          path="/add-item"
          render={(props) => 
            <AddItemForm 
              {...props} 
              itemToAdd={this.state.itemToAdd}
              onFormChange={this.onFormChange}
              onFormSubmit={this.onFormSubmit}
            />} 
        />
        <Route
          path="/update-item"
          render={(props) => <UpdateItemForm {...props} />} 
        />
      </div>
    );
  }
}

export default App;
