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
    type: 'link',
    source: join(__dirname, 'i3/config'),
    target: '.config/i3/config'
  },
  {
    type: 'link',
    source: join(__dirname, 'plasma-workspace/env/wm.sh'),
    target: '.config/plasma-workspace/env/wm.sh'
  },
  {
    type: 'exec',
    command: `cat ${fluxAptSourceList} | sudo tee /etc/apt/sources.list.d/flux.list`,
  },
  {
    type: 'exec',
    command: `cat ${fluxAptKey} | sudo tee /etc/apt/trusted.gpg.d/flux.asc`,
  },
  {
    type: 'aptpkg',
    package: 'fluxgui'
  },
  {
    type: 'aptpkg',
    package: 'redshift'
  },
  {
    type: 'link',
    source: join(__dirname, 'redshift.conf'),
    target: '.config/redshift.conf'
  },
  {
    type: 'link',
    source: join(__dirname, 'xinitrc'),
    target: '.xinitrc'
  }
]
