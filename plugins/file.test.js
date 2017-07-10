const test = require('ava')

const File = require('./file')

test.cb('simple example', t => {
  const source = 'path/to/file/in/config'
  const target = '/absolute/path/to/file/on/machine'
  const mode = 0o644
  const user = 'dinosaur'
  const userId = 1000
  const group = 'dinosaur'
  const groupId = 1000

  const sourceContents = 'hey\n'
  const etcpasswd = `root:x:0:0:root:/root:/bin/bash
dinosaur:x:1000:1000:dinosaur:/home/dinosaur:/bin/zsh`
  const etcgroup = `root:x:0:
dinosaur:x:1000:`

  const fs = {
    readFile: (path, encoding, cb) => {
      if (cb == null) cb = encoding
      if (path === '/etc/passwd') cb(null, etcpasswd)
      else if (path === '/etc/group') cb(null, etcgroup)
      else if (path === source) cb(null, sourceContents)
      else return t.fail('bad readFile(path)')
      t.pass()
    },
    writeFile: (path, content, cb) => {
      t.truthy(content)
      if (path === target) cb(null)
      else return t.fail('bad writeFile(path, content)')
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
    fs
  }


  const continuable = File(example)

  continuable((err) => {
    console.log('err', err)
    t.end(err)
  })
})

