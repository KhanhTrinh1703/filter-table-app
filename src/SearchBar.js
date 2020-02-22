import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='search-bar'>
				<input type='input' className='search-box' placeholder='Search...' />
				<input type='checkbox' className='check-box' />
				Only show products in stock
			</div>
		);
	}
}

export default SearchBar;