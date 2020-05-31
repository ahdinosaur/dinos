const { join } = require('path')

module.exports = {
  /*
  base: require('./base'),
  // debian: require('./debian'),
  ssh: require('./ssh'),
  zsh: require('./zsh'),
  vim: require('./vim'),
  git: require('./git'),
  web: require('./web'),
  */
  desktop: require('./desktop')
  /*
  docker: require('./docker'),
  postgres: require('./postgres'),
  dev: require('./dev'),
  android: require('./android'),
  */
  // document: require('./document'),
  // image: require('./image'),
  // draw: require('./draw'),
  // '3d': require('./3d'),
  // circuits: require('./circuits'),
  // video: require('./video'),
  // audio: require('./audio')
}
