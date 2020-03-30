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
  },
  {
    type: 'exec',
    command: 'if [ ! -d "$HOME/.oh-my-zsh" ]; then git clone git://github.com/robbyrussell/oh-my-zsh "$HOME/.oh-my-zsh"; else bash "$HOME/.oh-my-zsh/tools/upgrade.sh"; fi'
  }
]
