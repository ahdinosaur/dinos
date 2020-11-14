module.exports = [
  {
    type: 'aptpkg',
    packages: [
      // internets
      'firefox',
      'deluge-gtk',
      'deluged',
      'mumble',
      'youtube-dl',

      // documents
      'libreoffice',
      'texmaker',

      // audio
      'audacity',

      // images
      'gimp',
      'imagemagick',

      // draw (2d)
      'inkscape',
      'librecad',

      // 3d
      'openscad',
      'blender',

      // circuits
      'kicad',

      // video
      'vlc',
      'ffmpeg',
      'handbrake', // ffmpeg gui
      'kazam' // screen recorder
    ]
  },
  // google-chrome
  {
    type: 'exec',
    command: 'if ! [ -e "/etc/apt/sources.list.d/google-chrome.list" ]; then mkdir ~/tmp; cd ~/tmp; wget "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb" -O google-chrome.deb ; sudo dpkg -i google-chrome.deb; sudo apt install -yf; fi'
  },
  // zoom
  {
    type: 'exec',
    command: 'if ! [ -x "$(command -v zoom)" ]; then mkdir ~/tmp; cd ~/tmp; wget "https://zoom.us/client/latest/zoom_amd64.deb" -O zoom.deb; sudo dpkg -i zoom.deb; sudo apt install -yf; fi'
  },
  // spotify
  {
    type: 'exec',
    commands: [
      'curl -sS https://download.spotify.com/debian/pubkey_0D811D58.gpg | sudo apt-key add -',
      'echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list',
      'sudo apt update'
    ]
  },
  // spotify
  {
    type: 'aptpkg',
    package: 'spotify-client'
  },
  // signal
  {
    type: 'exec',
    commands: [
      'curl -fsSL https://updates.signal.org/desktop/apt/keys.asc | sudo apt-key add -',
      'echo "deb [arch=amd64] https://updates.signal.org/desktop/apt xenial main" | sudo tee -a /etc/apt/sources.list.d/signal.list',
      'sudo apt update'
    ]
  },
  {
    type: 'aptpkg',
    package: 'signal-desktop'
  },
  // obs studio
  {
    type: 'aptsource',
    name: 'ppa:obsproject/obs-studio'
  },
  {
    type: 'aptpkg',
    packages: [
      'obs-studio'
    ]
  }
]
