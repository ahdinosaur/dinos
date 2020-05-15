module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'vlc',
      'ffmpeg'
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
