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
      'nmap',

      // color picker
      'gpick'
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
    command: 'if ! [ -x "$(command -v heroku)" ]; then curl https://cli-assets.heroku.com/install-ubuntu.sh | sh; fi'
  },
  // ruby
  {
    type: 'aptsource',
    name: 'ppa:rael-gc/rvm'
  },
  {
    type: 'aptpkg',
    package: 'rvm'
  },
  // node.js
  {
    type: 'exec',
    commands: [
      `if [ ! -d "$HOME/.nvm" ]; then git clone git://github.com/nvm-sh/nvm.git "$HOME/.nvm"; fi; cd "$HOME/.nvm" && git pull && git checkout v0.35.3`,
      `. "$HOME/.nvm/nvm.sh"`,
      `nvm install 'lts/*'`
    ]
  },
  // rust
  {
    type: 'exec',
    command: 'if ! [ -x "$(command -v rustup)" ]; then curl https://sh.rustup.rs -sSf | sh -s -- -y --no-modify-path; fi'
  }
]
