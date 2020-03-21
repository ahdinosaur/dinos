const { join } = require('path')

module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'gnome-shell-extension-redshift'
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
