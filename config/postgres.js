
module.exports = [
  /*
  {
    type: 'exec',
    commands: [
      'wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -',
      'echo "deb http://apt.postgresql.org/pub/repos/apt/ bionic-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list',
      'sudo apt update'
    ]
  },
  */
  {
    type: 'aptpkg',
    packages: [
      'postgresql-11',
      'postgresql-client-11',
      'postgresql-contrib',
      'postgresql-server-dev-11',
      'pgadmin3'
    ]
  }
]
