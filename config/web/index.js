const { join } = require('path')

module.exports = [
  {
    type: 'aptpkg',
    packages: [
//      'vimb',
      'firefox',
//      'flashplugin-nonfree',
//      'xul-ext-pentadactyl',
//      'xul-ext-adblock-plus',
//      'xul-ext-https-everywhere',
//      'xul-ext-noscript',
      'deluge-gtk',
      'deluged',
      'mumble'
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
      'curl -sS https://download.spotify.com/debian/pubkey.gpg | sudo apt-key add -',
      'echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list',
      'sudo apt update'
    ]
  },
  {
    type: 'aptpkg',
    package: 'spotify-client'
  }
]
