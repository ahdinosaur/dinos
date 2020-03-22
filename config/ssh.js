module.exports = [
  {
    type: 'aptpkg',
    packages: [
      'ssh'
    ]
  },
  // https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices
  {
    type: 'exec',
    commands: [
      'mkdir -p $HOME/.ssh',
      'chmod 700 $HOME/.ssh',
      'if ! [ -e "$HOME/.ssh/id_ed25519" ]; then ssh-keygen -t ed25519 -a 100 -f "$HOME/.ssh/id_ed25519" -N ""; fi',
      'if ! [ -e "$HOME/.ssh/id_rsa" ]; then ssh-keygen -t rsa -b 4096 -o -a 100 -f "$HOME/.ssh/id_rsa" -N ""; fi'
    ]
  }
]
