const { join } = require('path')

module.exports = [
  // TODO neovim: https://github.com/neovim/neovim
  {
    type: 'aptpkg',
    packages: [
      'vim',
//      'vimdiff',
      'vim-gtk3', // for xterm_clipboard support
      'python3-dev', // for compiling YouCompleteMe vim plugin
      'cmake' // for compiling YouCompleteMe vim plugin
    ]
  },
  {
    type: 'link',
    source: join(__dirname, 'vimrc'),
    target: '.vimrc'
  },
  // https://github.com/junegunn/vim-plug
  {
    type: 'exec',
    commands: [
      'curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim',
      'vim +"PlugInstall --sync" +qa'
    ]
  }
]
