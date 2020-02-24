import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow.js';
import ProductRow from './ProductRow.js';

class ProductTable extends Component {
	//
	processData(data, inStockOnly, filterText) {
		let filter = [];
		//
		data.forEach(element => {
			let category = element.category;
			let val = this.isHasCategory(filter, category);
			//filter data
			if (element.name.indexOf(filterText) === -1) {
				return;
			}
			if (inStockOnly && !element.stocked) {
				return;
			}
			// insert data
			if (val.result) {
				let objData = {
					productName: element.name,
					productPrice: element.price,
					productState: element.stocked
				};
				filter[val.position].data.push(objData);
			} else {
				let obj = {
					category: category,
					data: [{ productName: element.name, productPrice: element.price, productState: element.stocked }],
				}
				filter.push(obj);
			}
		});
		return filter;
	}

	isHasCategory(array, category) {
		let val = { result: false, position: null };
		for (let index = 0; index < array.length; index++) {
			if (array[index].category === category) {
				val.result = true;
				val.position = index
				break;
			}
		}
		return val;
	}

	render() {
		let inStockOnly = this.props.inStockOnly;
		let filterText = this.props.filterText;
		let dataArr = this.processData(this.props.data_product, inStockOnly, filterText);
		return (
			<div className='product-table'>
				<div className='product-table-title'>
					<p className='header-name inline-block'>Name</p>
					<p className='header-price inline-block'>Price</p>
				</div>
				{
					dataArr.map((item, key) => {
						return (
							<div className='product-table-content' key={key}>
								<ProductCategoryRow key={item.category} category={item.category} />
								{
									item.data.map((item, key) => {
										return (<ProductRow key={key} product={item} inStockOnly={inStockOnly} />)
									})
								}
							</div>
						)
					})
				}
			</div>
		);

	}
}

export default ProductTable;