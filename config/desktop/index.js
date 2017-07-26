const { join } = require('path')

module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'task-kde-desktop',
      'i3',
      'compton'
    ]
  },
  {
    type: 'link',
    source: join(__dirname, 'i3/config'),
    target: '.config/i3/config'
  },
  {
    type: 'link',
    source: join(__dirname, 'plasma-workspace/env/wm.sh'),
    target: '.config/plasma-workspace/env/wm.sh'
  }
]
