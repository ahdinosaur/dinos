const { join } = require('path')

module.exports = {
  base: require('./base'),
  debian: require('./debian'),
  zsh: require('./zsh'),
  vim: require('./vim'),
  git: require('./git'),
  dev: require('./dev'),
//  media: require('./media'),
//  office: require('./office'),
//  cad: require('./cad'),
  web: require('./web'),
  desktop: require('./desktop'),
  docker: require('./docker')
}
