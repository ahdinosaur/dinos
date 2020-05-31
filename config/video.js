module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'vlc',
      'ffmpeg',
      'handbrake', // ffmpeg gui
      'kazam' // screen recorder
    ]
  },
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
