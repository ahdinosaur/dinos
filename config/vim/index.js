const { join } = require('path')

module.exports = [
  {
    type: 'link',
    source: join(__dirname, 'vimrc'),
    target: '.vimrc'
  },
  // https://github.com/junegunn/vim-plug
  {
    type: 'exec',
    command: `curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
     https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
    `
  },
  {
    type: 'aptpkg',
    packages: [
      'vim',
      'vim-diff',
      'vim-gui-common', // for xterm_clipboard support
    ]
  }
  // TODO neovim: https://github.com/neovim/neovim
]s
