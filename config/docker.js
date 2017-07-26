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
    package: 'docker-ce'
  },
  {
    type: 'exec',
    commands: [
      //'groupadd docker',
      'usermod -aG docker dinosaur',
      'systemctl enable docker'
    ],
    sudo: true
  }
]
