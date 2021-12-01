import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { CartContext } from '../cart/CartContext';
import { Redirect } from 'react-router-dom';
import ProductOnCategoryPage from './ProductOnCategoryPage';
import CategoryPageStyles from '../styles/CategoryPageStyles';
import ALL_PRODUCTS_BY_CATEGORY from '../../apollo/allProductsByCategoryQuery';

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
            if (error) return <Redirect to="/404" />;
            if (data) {
              if (!data.category) {
                return <Redirect to="/404" />;
              }
              const { products } = data.category;
              return (
                <div className="category-page-inner-grid">
                  {products.map((product) => (
                    <ProductOnCategoryPage
                      product={product}
                      key={product.id}
                      category={category}
                    />
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
