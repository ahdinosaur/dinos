// https://docs.saltstack.com/en/develop/ref/states/all/salt.states.git.html

{
  source: 'github.com/arst/rsta',
  target: '/path/to/repo/on/machine',
  rev: branch | tag
}
