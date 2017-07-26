module.exports = [
  {
    type: 'exec',
    command: 'curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -'
  },
  {
    type: 'aptsource',
    name: 'deb [arch=amd64] https://download.docker.com/linux/debian stretch stable'
  },
  {
    type: 'aptpkg',
    name: 'docker-ce'
  }
]
