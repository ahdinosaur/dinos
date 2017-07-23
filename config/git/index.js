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
      'git-gui'
    ]
  }
  // TODO hub: https://github.com/github/hub/pull/1502/files
]
