const path = require('path');

/*  Resources
https://github.com/Shopify/slate/commit/8edd23a3ac6806c1b7b2645e29eb28ef7e2eff6f
https://github.com/Shopify/slate/wiki/Slate-Configuration
*/

const postCSSNext = require('postcss-cssnext');
const postCSSNested = require('postcss-nested');
const postCSSImport = require('postcss-import');

// const alias = {
//   fonts: path.resolve("./src/assets/fonts")
// }

module.exports = {
  'paths.theme.src': config => path.join(config.get('paths.theme'), 'src'),
  // slateTools: {
  //   extends: {
  //     dev: {
  //       resolve: { alias }
  //     }
  //   }
  // },
  'webpack.postcss.plugins': (config, defaultValue) => [
    postCSSNext,
    postCSSImport,
    postCSSNested,
    ...defaultValue
  ]
};
