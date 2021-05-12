const relativeUrls = {
  checkout: '/checkout',
  collection: (routeName) => `/shop/${routeName}`,
  aboutUs: '/about-us',
  search: (searchQuery) => `/search?q=${searchQuery}`,
  shop: '/shop',
  signing: '/signing',
};

module.exports = relativeUrls;
