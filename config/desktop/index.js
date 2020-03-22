const { join } = require('path')
const { readdirSync } = require('fs')

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
      'pulseaudio',
      'pavucontrol',
      'alsa-utils',
      'fonts-font-awesome',
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
  },
  {
    type: 'link',
    source: join(__dirname, 'i3xrocks/config'),
    target: '.config/regolith/i3xrocks/config'
  },
  {
    type: 'link',
    source: join(__dirname, 'i3xrocks/blocks'),
    target: '.config/regolith/i3xrocks/blocks'
  }

  // TODO
  // gsettings set org.gnome.desktop.input-sources sources "[('us+colemak', 'us')]"
]
