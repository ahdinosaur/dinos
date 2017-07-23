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
    type: 'aptpkg',
    package: 'zsh'
  }
]
