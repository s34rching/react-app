import React from 'react';
import * as _ from 'lodash';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { EmptyResultsContainer, SearchTitle } from './search-results.styles';
import CollectionPreview from '../../components/preview/collection-preview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectQueriedProducts, selectIsFetching } from '../../redux/search/search.selectors';

export const SearchResultsPage = ({ isLoading, products }) => (
  <div>
    <SearchTitle>SEARCH</SearchTitle>
    {
        (products === null || (products.length === 0 && _.isArray(products)))
          ? (
            <EmptyResultsContainer>
              <p>Nothing found...</p>
            </EmptyResultsContainer>
          ) : (
            <CollectionPreview
              items={products.flatMap((item) => [item, item])}
              previewItemsNumber={products.length}
            />
          )
      }
  </div>
);

export const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
  products: selectQueriedProducts,
});

export default connect(mapStateToProps)(WithSpinner(SearchResultsPage));
