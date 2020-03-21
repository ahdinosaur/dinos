const { join } = require('path')

module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'redshift-gtk'
    ]
  }
  /*
  {
    type: 'exec',
    command: `mkdir -p $HOME/.config/regolith/i3`
  },
  {
    type: 'link',
    source: join(__dirname, 'i3/config'),
    target: '.config/regolith/i3/config'
  },
  */
]
