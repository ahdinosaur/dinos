const { join } = require('path')

// https://github.com/ggreer/the_silver_searcher
module.exports = [
  {
    type: 'aptpkg',
    packages: [
      // terminal
      'xclip',
      // 'bluedevil'
      'htop',
      // 'mc',
      'tree',
      'wget',
      'curl',
      // 'aria2',
      // 'rtorrent',
      'silversearcher-ag',

      // virtual machines
//      'virtualbox',

      // disk utilities
//      'gparted',
      // TODO disk space viewer

      // security
//      'wireshark',
      'nmap'
//      'keepassx'
    ]
  }
  // peek (https://github.com/phw/peek#ubuntu)
  // heroku-cli
  /*
  {
    type: 'exec',
    command: 'curl https://cli-assets.heroku.com/install-ubuntu.sh | sh',
    sudo: true
  }
  */
]
