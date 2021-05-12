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

export const ContactCardContainer = styled.div`
  margin: 20px 0;
  padding-left: 30px;
  border-left: black 1px solid;
`;

ContactCardContainer.displayName = 'ContactItemContainer';

export const ContactCardDataContainer = styled.div`
  width: 30%;
  float: left;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

ContactCardDataContainer.displayName = 'ContactCardDataContainer';

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

export const ContactCardTitleContainer = styled.div`
  width: fit-content;
  font-size: 25px;
  margin-bottom: 20px;
`;

ContactCardTitleContainer.displayName = 'ContactCardTitleContainer';

export const ContactItemContainer = styled.div`
  font-size: 20px;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

ContactItemContainer.displayName = 'ContactItemContainer';

export const ContactItemLogoContainer = styled.div`
  width: 50px;
  margin-right: 20px;
`;

ContactItemLogoContainer.displayName = 'ContactItemLogoContainer';

export const ContactItemDataContainer = styled.div`
  ${getMapLinksAdditionalStyles}
`;

ContactItemDataContainer.displayName = 'ContactItemDataContainer';
