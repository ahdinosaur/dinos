module.exports = [
  // docker
  {
    type: 'exec',
    commands: [
      'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -',
      'echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" | sudo tee -a /etc/apt/sources.list.d/docker.list',
      'sudo apt update'
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
