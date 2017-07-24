module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'apt-transport-https',
      'software-properties-common', // add-apt-repository
      'build-essential',
      'curl',
      'python-dev', // for compiling YouCompleteMe vim plugin
      'cmake' // for compiling YouCompleteMe vim plugin
    ]
  }
]
