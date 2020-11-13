const { join } = require('path')

module.exports = [
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
    type: 'chsh',
    shell: '/bin/zsh'
  }
]
