const { join } = require('path')

module.exports = [
  {
    type: 'gitrepo',
    source: 'git://github.com/robbyrussell/oh-my-zsh',
    target: '.oh-my-zsh'
  },
  {
    type: 'link',
    source: join(__dirname, 'zshrc'),
    target: '.zshrc'
  },
  {
    type: 'link',
    source: join(__dirname, 'zshenv'),
    target: '.zshenv'
  },
  {
    type: 'link',
    source: join(__dirname, 'zlogin'),
    target: '.zlogin'
  },
  {
    type: 'link',
    source: join(__dirname, 'zprofile'),
    target: '.zprofile'
  },
  {
    type: 'aptpkg',
    package: 'zsh'
  },
  {
    type: 'exec',
    command: 'chsh -s /bin/zsh'
  }
]
