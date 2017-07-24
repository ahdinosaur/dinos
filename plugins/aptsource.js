// based on https://docs.saltstack.com/en/develop/ref/states/all/salt.states.pkg.html
/*
{
  name: 'ppa:wolfnet/logstash',
  dist: 'sid',
  file: '/etc/apt/sources.list.d/logstash.list',
  keyId: '28B04E4A',
  keyServer: 'keyserver.ubuntu.com'
}
*/
const exec = require('./exec')

module.exports = pkgSource

function pkgSource (options) {
  const {
    name,
    keyServer,
    keyId
  } = options

  var command = `add-apt-repository -y ${name}`

  if (keyServer) {
    command += ` --keyserver ${keyServer}`
  }

  const commands = [command, 'apt update']

  return exec({
    commands,
    sudo: true
  })
}
