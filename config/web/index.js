const { join } = require('path')

module.exports = [
  {
    type: 'aptpkg',
    packages: [
//      'vimb',
      'firefox-esr', // TODO more recent firefo
      'flashplugin-nonfree',
//      'xul-ext-pentadactyl',
      'xul-ext-adblock-plus',
      'xul-ext-https-everywhere',
//      'xul-ext-noscript',
      'deluge-gtk'
    ]
  }
]
