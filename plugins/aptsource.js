// based on https://docs.saltstack.com/en/develop/ref/states/all/salt.states.pkg.html

{
  name: 'ppa:wolfnet/logstash',
  dist: 'sid',
  file: '/etc/apt/sources.list.d/logstash.list',
  keyId: '28B04E4A',
  keyServer: 'keyserver.ubuntu.com'
}

module.exports
