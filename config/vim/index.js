const { join } = require('path')

module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'neovim',
      'python3-dev', // for compiling YouCompleteMe vim plugin
      'cmake' // for compiling YouCompleteMe vim plugin
    ]
  },
  {
    type: 'exec',
    commands: [
      'mkdir -p $HOME/.config/nvim'
    ]
  },
  {
    type: 'link',
    source: join(__dirname, 'init.vim'),
    target: '.config/nvim/init.vim'
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
