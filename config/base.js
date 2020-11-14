module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'apt-transport-https',
      'software-properties-common', // add-apt-repository
      'build-essential',
      'curl',
      'ubuntu-restricted-extras'
    ]
  },
  // make Linux use local time, so we can dual-boot with Windows
  {
    type: 'exec',
    command: 'timedatectl set-local-rtc 1 --adjust-system-clock'
  }
]
