import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.state = {filterText: '', inStockOnly: false};
    }
    //
    handleCheckboxChange(value) {
        this.setState({ inStockOnly: !this.state.inStockOnly });
    }
    //
    handleTextInputChange(value) {
        this.setState({ filterText: value });
    }
    //
    render() { 
        const data_product = this.props.data_product
        return ( 
            <div className='filterable'>
                <SearchBar onCheckboxChange={this.handleCheckboxChange} onTextInputChange={this.handleTextInputChange} />
                <ProductTable data_product={data_product} inStockOnly={this.state.inStockOnly} filterText={this.state.filterText}/>
            </div>
         );
    }
}

export default FilterableProductTable;