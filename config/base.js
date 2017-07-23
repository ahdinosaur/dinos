module.exports = [
  {
    type: 'aptpkg'
    packages: [
      'build-essential',
      'cmake',
      'apt-transport-https',
      'software-properties-common', 'python-software-properties', // add-apt-repository
      'python-dev',
      'python3-dev'
    ]
  }
]
