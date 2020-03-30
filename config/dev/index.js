const { join } = require('path')

module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'htop',
      'mc',
      'tree',
      'wget',
      'curl',

      // https://github.com/ggreer/the_silver_searcher
      'silversearcher-ag',

      // virtual machines
      'virtualbox',

      // disk utilities
      'gnome-disk-utility',
      // disk space viewer
      'ncdu',

      // security
      'wireshark',
      'nmap'
    ]
  },
  // peek (https://github.com/phw/peek#ubuntu)
  {
    type: 'aptsource',
    name: 'ppa:peek-developers/stable'
  },
  {
    type: 'aptpkg',
    package: 'peek'
  },
  // heroku-cli
  {
    type: 'exec',
    command: 'if ! [ -x "$(command -v heroku)" ]; then curl https://cli-assets.heroku.com/install-ubuntu.sh | sh; fi',
    sudo: true
  }
]
