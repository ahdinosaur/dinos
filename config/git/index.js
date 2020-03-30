const { join } = require('path')

module.exports = [
  {
    type: 'link',
    source: join(__dirname, 'gitconfig'),
    target: '.gitconfig'
  },
  {
    type: 'aptpkg',
    packages: [
      'git',
      'git-lfs',
      'git-gui',
      'hub'
    ]
  }
]
