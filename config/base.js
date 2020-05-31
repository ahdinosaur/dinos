module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'apt-transport-https',
      'software-properties-common', // add-apt-repository
      'build-essential',
      'curl'
    ]
  },
  // if on desktop,
  // make Linux use local time, so we can dual-boot with Windows
  {
    type: 'exec',
    command: 'if [ "$(hostname)" = "blue-dream" ]; then timedatectl set-local-rtc 1 --adjust-system-clock; fi'
  }
]
