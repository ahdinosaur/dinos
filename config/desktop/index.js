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
      'dunst',
      'pulseaudio',
      'pavucontrol',
      'alsa-utils',
      'fonts-font-awesome',
      'parcellite',
      'redshift-gtk'
    ]
  },
  // alacritty (terminal emulator)
  {
    type: 'aptsource',
    name: 'ppa:mmstick76/alacritty'
  },
  {
    type: 'aptpkg',
    package: 'alacritty'
  },
  {
    type: 'exec',
    command: 'update-alternatives --set x-terminal-emulator "$(which alacritty)"',
    sudo: true
  },
  // configure i3
  {
    type: 'exec',
    commands: [
      'mkdir -p $HOME/.config/regolith/i3',
      'mkdir -p $HOME/.config/regolith/i3xrocks',
      'mkdir -p $HOME/.config/dunst'
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
  },
  {
    type: 'link',
    source: join(__dirname, 'dunst/dunstrc'),
    target: '.config/dunst/dunstrc'
  },
  {
    type: 'link',
    source: join(__dirname, 'parcellite/parcelliterc'),
    target: '.config/parcellite/parcelliterc'
  },
  {
    type: 'exec',
    commands: [
      // set keyboard layouts
      `gsettings set org.gnome.desktop.input-sources sources "[('xkb', 'us+colemak'), ('xkb', 'us')]"`,
      `gsettings set org.gnome.desktop.input-sources xkb-options "['caps:escape']"`,
      // set natural (reverse) mouse scroll
      'gsettings set org.gnome.desktop.peripherals.mouse natural-scroll true',
      // power manager
      'gsettings set org.gnome.desktop.session idle-delay 0',
      'gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-ac-type nothing',
      'gsettings set org.gnome.settings-daemon.plugins.power power-button-action suspend'
    ]
  }
  // TODO looks
  // ~/.Xresources-regolith
  // regolith-look refresh
]
