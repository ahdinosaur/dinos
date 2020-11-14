module.exports = [
  // docker
  {
    type: 'exec',
    // command: `curl -fsSL https://download.docker.com/linux/debian/gpg | sudo tee /etc/apt/trusted.gpg.d/docker.asc`
    command: [
      'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -',
      'echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" | sudo tee -a /etc/apt/sources.list.d/docker.list',
    ]
  },
  {
    type: 'aptpkg',
    packages: [
      'docker-ce',
      'docker-ce-cli',
      'containerd.io'
    ]
  },
  {
    type: 'exec',
    commands: [
      // 'groupadd docker',
      'usermod -aG docker dinosaur',
      'systemctl enable docker'
    ],
    sudo: true
  }
]
