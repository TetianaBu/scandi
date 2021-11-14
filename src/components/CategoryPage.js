import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { CartContext} from './CartContext';
import ProductItem from './ProductItem';
import CategoryPageStyles from './styles/CategoryPageStyles';
import ALL_PRODUCTS_BY_CATEGORY from '../apollo/allProductsByCategoryQuery';

class CategoryPage extends Component {
  static contextType = CartContext;
  render() {
    const { category } = this.props;
    return (
      <CategoryPageStyles>
        <h1>{category}</h1>
        <Query
          query={ALL_PRODUCTS_BY_CATEGORY}
          variables={{ category: category }}
        >
          {({ loading, data, error }) => {
            if (loading) return 'loading...';
            if (error) return 'error...';
            if (data) {
              if (!data.category) {
                return '/404';
              }
              const { products } = data.category;
              return (
                <div className="category-page-inner-grid">
                  {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                  ))}
                </div>
              );
            }
          }}
        </Query>
      </CategoryPageStyles>
    );
  }
}

export default CategoryPage;
