import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class ProductDetails extends PureComponent {
  static propTypes = {
    product: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired
    })).isRequired
  }

  render() {
    const {product} = this.props
    
    let image = null;
    if (product.image) {
      image = <img />
    }

    return (
      <div>
        <h1>{ product.name }</h1>
        <p>{product.price} €</p>
        <p>{product.description}</p>
        {image}
        <button >Buy this product!</button>
      </div>
    )
  }
}

export default ProductDetails
