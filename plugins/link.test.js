const test = require('ava')

const Link = require('./link')

test.cb('simple example', t => {
  const source = '/home/dinosaur/.config/dinos/vim/.vimrc'
  const target = '.vimrc'
  const mode = 0o644
  const user = 'dinosaur'
  const userId = 1000
  const group = 'dinosaur'
  const groupId = 1000
  const env = {
    HOME: '/home/dinosaur'
  }

  const etcpasswd = `root:x:0:0:root:/root:/bin/bash
dinosaur:x:1000:1000:dinosaur:/home/dinosaur:/bin/zsh`
  const etcgroup = `root:x:0:
dinosaur:x:1000:`

  const fs = {
    readFile: (path, encoding, cb) => {
      if (cb == null) cb = encoding
      if (path === '/etc/passwd') cb(null, etcpasswd)
      else if (path === '/etc/group') cb(null, etcgroup)
      else return t.fail('bad readFile(path)')
      t.pass()
    },
    symlink: (_target, path, cb) => {
      t.is(_target, '/home/dinosaur/.config/dinos/vim/.vimrc')
      t.is(path, '/home/dinosaur/.vimrc')
      cb()
    },
    chmod: (path, _mode, cb) => {
      t.is(path, target)
      t.is(_mode, mode)
      cb()
    },
    chown: (path, _userId, _groupId, cb) => {
      t.is(path, target)
      t.is(_userId, userId)
      t.is(_groupId, groupId)
      cb()
    }
  }

  const example = {
    source,
    target,
    mode,
    user,
    group,
    fs,
    env
  }


  const continuable = Link(example)
  continuable(t.end)
})

