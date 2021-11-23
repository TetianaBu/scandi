import React from 'react';
import { ProductDescriptionCarouselStyles } from '../styles/ProductDescriptionCarouselStyles';
import { OutOfStockStyles } from '../styles/OutOfStockStyles';
class ProductDescriptionCarousel extends React.Component {
  state = {
    image: true
  };

  initialImage = (image) => {
    this.setState({
      image: image
    });
  };

  changeImage = (image, gallery) => {
    return image === true ? gallery[0] : image;
  };

  render() {
    const { image } = this.state;
    const { name, gallery, inStock } = this.props;
    console.log(inStock);
    return (
      <ProductDescriptionCarouselStyles>
        <div className="gallery">
          {gallery.map((img, index) => (
            <img
              src={img}
              onClick={() => {
                this.initialImage(img);
              }}
              key={`${name}:${index}`}
              alt={name}
            />
          ))}
        </div>
        <div className="main-img-wrapper">
        <img src={this.changeImage(image, gallery)} alt={name} />
        {!inStock && <OutOfStockStyles>OUT OF STOCK</OutOfStockStyles>}
        </div>
      </ProductDescriptionCarouselStyles>
    );
  }
}

export default ProductDescriptionCarousel;
