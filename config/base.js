module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'apt-transport-https',
      'software-properties-common', // add-apt-repository
      'build-essential',
      'curl',
    ]
  }
]
