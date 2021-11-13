import { Component } from 'react';
import { Query } from '@apollo/client/react/components';
import { Context } from './Context';
import CategoryPageStyles from './styles/CategoryPageStyles';
import ALL_PRODUCTS_BY_CATEGORY from '../apollo/allProductsByCategoryQuery';

class CategoryPage extends Component {
  static contextType = Context;

  render() {
    const { category } = this.props;
    console.log(Context);
    console.log(this.props);
    console.log({category})
    return (
      <CategoryPageStyles>
        <h1>{category}</h1>
        <div className="listing-page-product-container">
          <Query
            query={ALL_PRODUCTS_BY_CATEGORY}
            variables={{ category: category }}
          >
            {({ loading, data, error }) => {
              console.log({loading, data, error})
              if (loading) return 'loading...';
              if (error) return 'error...';
              if (data) {
                if (!data.category) {
                  return '/404';
                }
                const { products } = data.category;
                return (
                  <>
                    {products.map((product) => (
                      <div key={product.name} className="listing-page-product">
                        {product.name}
                      </div>
                    ))}
                  </>
                );
              }
            }}
          </Query>
        </div>
      </CategoryPageStyles>
    );
  }
}

export default CategoryPage;
