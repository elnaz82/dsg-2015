require.config({
  baseUrl: '../js',
  paths: {
    jquery: 'jquery.min'
  },
  shims: {

  }
});

require(['jquery'], function($) {
  console.log($);
});