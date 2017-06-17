/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

module.exports = (env) => {
  const file = `./webpack.${env}.js`;
  return require(file);
};
