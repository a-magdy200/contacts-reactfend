import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';
class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <Header logo={logo} />
    	<ShoppingList 
    		onSubmit={this.addItem}
			onInputChange={this.handleChange}
			inputValue={this.state.value}
			disabledAddButtonState={this.inputIsEmpty()}
			onDeleteLastItem={this.deleteLastItem}
			disabledDeleteButtonState={this.noItemsFound()}
			items={this.state.items}
		/>
      </div>
    );
  }
}

export default App;
