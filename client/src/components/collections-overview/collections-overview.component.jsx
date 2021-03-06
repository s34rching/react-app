import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionOverviewContainer from './collections-overview.styles';
import CollectionPreview from '../preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

export const CollectionsOverview = ({ collections }) => {
  const PREVIEW_ITEMS_NUMBER = 4;
  return (
    <CollectionOverviewContainer>
      {
        collections.map(({ id, title, items }) => (
          <CollectionPreview
            key={id}
            title={title}
            items={items}
            previewItemsNumber={PREVIEW_ITEMS_NUMBER}
          />
        ))
      }
    </CollectionOverviewContainer>
  );
};

export const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
