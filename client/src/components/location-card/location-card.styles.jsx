import styled, { css } from 'styled-components';

const MapLinkStyles = css`
  a:link {
    text-decoration: underline;
  }

  a:visited {
    color: grey;
  }

  a:hover {
    color: cadetblue;
  }
`;

const getMapLinksAdditionalStyles = (props) => ((props.isMapLink) ? MapLinkStyles : null);

export const LocationCardContainer = styled.div`
  margin: 20px 0;
  padding-left: 30px;
  border-left: black 1px solid;
`;

LocationCardContainer.displayName = 'LocationCardContainer';

export const LocationCardDataContainer = styled.div`
  width: 30%;
  float: left;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

LocationCardDataContainer.displayName = 'LocationCardDataContainer';

export const ShopPanoramaContainer = styled.div`
  width: 70%;
  float: left;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  height: 200px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

ShopPanoramaContainer.displayName = 'ShopPanoramaContainer';

export const LocationCardTitleContainer = styled.div`
  width: fit-content;
  font-size: 25px;
  margin-bottom: 20px;
`;

LocationCardTitleContainer.displayName = 'LocationCardTitleContainer';

export const LocationItemContainer = styled.div`
  font-size: 20px;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

LocationItemContainer.displayName = 'LocationItemContainer';

export const LocationItemLogoContainer = styled.div`
  width: 50px;
  margin-right: 20px;
`;

LocationItemLogoContainer.displayName = 'LocationItemLogoContainer';

export const LocationItemDataContainer = styled.div`
  ${getMapLinksAdditionalStyles}
`;

LocationItemDataContainer.displayName = 'LocationItemDataContainer';
