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

      // https://github.com/clvv/fasd
      // 'fasd',

      'fzf',

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
      'gpick',

      // peek (https://github.com/phw/peek#ubuntu)
      'peek'
    ]
  },
  // heroku-cli
  {
    type: 'exec',
    command: 'if ! [ -x "$(command -v heroku)" ]; then curl https://cli-assets.heroku.com/install-ubuntu.sh | sh; fi'
  },
  // ruby
  {
    type: 'exec',
    commands: [
      'sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8094BB14F4E3FBBE',
      'echo "deb http://ppa.launchpad.net/rael-gc/rvm/ubuntu focal main " | sudo tee -a /etc/apt/sources.list.d/rvm.list',
      'sudo apt update'
    ]
  },
  {
    type: 'aptpkg',
    package: 'rvm'
  },
  // node.js
  {
    type: 'exec',
    commands: [
      'if [ ! -d "$HOME/.nvm" ]; then git clone git://github.com/nvm-sh/nvm.git "$HOME/.nvm"; fi',
      'cd "$HOME/.nvm" && git pull && git checkout v0.35.3; cd "$HOME"',
      '. "$HOME/.nvm/nvm.sh"',
      `nvm install 'lts/*'`
    ]
  },
  // rust
  {
    type: 'exec',
    command: 'if ! [ -x "$(command -v rustup)" ]; then curl https://sh.rustup.rs -sSf | sh -s -- -y --no-modify-path; fi'
  }
]
