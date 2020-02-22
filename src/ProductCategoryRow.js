import React, { Component } from 'react';

class ProductCategoryRow extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='product-category'>
				<p>{this.props.category}</p>
			</div>
		);
	}
}

export default ProductCategoryRow;