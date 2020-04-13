module.exports = [
  {
    type: 'aptpkg',
    package: 'adb'
  },
  {
    type: 'aptsource',
    name: 'ppa:maarten-fonville/android-studio'
  },
  {
    type: 'aptpkg',
    package: 'android-studio'
  },
  {
    type: 'exec',
    commands: [
      'sudo usermod -aG plugdev $(whoami)'
    ]
  }
]
