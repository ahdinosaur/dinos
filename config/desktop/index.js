const { join } = require('path')

const fluxAptSourceList = join(__dirname, 'apt/sources.list.d/flux.list')
const fluxAptKey = join(__dirname, 'apt/trusted.gpg.d/flux.asc')

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
    type: 'exec',
    command: `mkdir -p $HOME/.config/i3`
  },
  {
    type: 'link',
    source: join(__dirname, 'i3/config'),
    target: '.config/i3/config'
  },
   {
    type: 'exec',
    command: `mkdir -p $HOME/.config/plasma-workspace/env`
  },
  {
    type: 'link',
    source: join(__dirname, 'plasma-workspace/env/wm.sh'),
    target: '.config/plasma-workspace/env/wm.sh'
  },
  {
    type: 'aptpkg',
    package: 'redshift'
  }
]
