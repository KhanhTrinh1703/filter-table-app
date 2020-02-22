import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

class FilterableProductTable extends Component {
    //
    render() { 
        const data_product = this.props.data_product
        return ( 
            <div className='filterable'>
                <SearchBar />
                <ProductTable data_product={data_product}/>
            </div>
         );
    }
}

export default FilterableProductTable;