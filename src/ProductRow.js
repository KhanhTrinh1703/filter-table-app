import React, { Component } from 'react';

class ProductRow extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let product = this.props.product;
		let inStockOnly = this.props.inStockOnly;
		return (
			<div className={'product-row ' + (product.productState ? '' : 'out-of-stock')}>
				<div>
					<p className='product-name inline-block'>{product.productName}</p>
					<p className='product-price inline-block'>{product.productPrice}</p>
				</div>
			</div>
		);
	}
}

export default ProductRow;