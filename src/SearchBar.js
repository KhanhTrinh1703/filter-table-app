import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
		this.handleChangeTextInput = this.handleChangeTextInput.bind(this);
	}

	handleChangeCheckbox(e) {
		this.props.onCheckboxChange(e.target.value);
	}

	handleChangeTextInput(e) {
		this.props.onTextInputChange(e.target.value);
	}

	render() {
		return (
			<div className='search-bar'>
				<input type='input' className='search-box' placeholder='Search...'  onChange={this.handleChangeTextInput}/>
				<input type='checkbox' className='check-box' onChange={this.handleChangeCheckbox}/>
				Only show products in stock
			</div>
		);
	}
}

export default SearchBar;