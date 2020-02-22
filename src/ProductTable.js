import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

class ProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className='product-table'>
				<div className='product-table-title'>
					<p className='header-name inline-block'>Name</p>
					<p className='header-price inline-block'>Price</p>
				</div>
				<div className='product-table-content'>
					<ProductCategoryRow />
					<ProductRow	/>
				</div>
			</div>
		);
	}
}

export default ProductTable;