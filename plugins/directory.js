// based on https://docs.saltstack.com/en/develop/ref/states/all/salt.states.file.html


{
  path: '/absolute/path/to/file/on/machine',
  source: 'path/to/file/in/config.pixie', // https://github.com/pixiejs/pixie
  mode: '644',
  user: '',
  group: ''
}

module.exports
