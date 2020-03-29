
module.exports = [
  {
    type: 'exec',
    commands: [
      'wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -',
      'echo "deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list',
      'sudo apt update'
    ]
  },
  {
    type: 'aptpkg',
    packages: [
      'postgresql-12',
      'postgresql-client-12',
      'postgresql-contrib',
      'postgresql-server-dev-12',
      'pgadmin4',
    ]
  }
]
