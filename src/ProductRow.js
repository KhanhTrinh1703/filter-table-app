import React, { Component } from 'react';

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='product-row'>
                <div>
                    <p className='product-name inline-block'>Football</p>
                    <p className='product-price inline-block'>$49.99</p>
                </div>
            </div>
         );
    }
}

export default ProductRow;