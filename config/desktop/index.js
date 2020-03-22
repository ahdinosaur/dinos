const { join } = require('path')

module.exports = [
  // https://regolith-linux.org/docs/getting-started/install/
  {
    type: 'aptsource',
    name: 'ppa:regolith-linux/release'
  },
  {
    type: 'aptpkg',
    packages: [
      'regolith-desktop',
      'redshift-gtk'
    ]
  },
  {
    type: 'exec',
    commands: [
      'mkdir -p $HOME/.config/regolith/i3',
      'mkdir -p $HOME/.config/regolith/i3xrocks'
    ]
  },
  {
    type: 'link',
    source: join(__dirname, 'i3/config'),
    target: '.config/regolith/i3/config'
  }
]
