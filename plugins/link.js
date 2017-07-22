// based on https://docs.saltstack.com/en/develop/ref/states/all/salt.states.file.html

const { join } = require('path')
const defaultFs = require('fs')
const is = require('ramda/src/is')
const isNil = require('ramda/src/isNil')
const or = require('ramda/src/or')
const not = require('ramda/src/not')
const waterfall = require('run-waterfall')
const parallel = require('run-parallel')
const Log = require('pino')

const getUser = require('../lib/getUser')
const getGroup = require('../lib/getGroup')

const isNumber = is(Number)

module.exports = File

function File (options) {
  const {
    source,
    target,
    mode,
    user,
    group,
    data = {},
    defaults = {},
    log = Log(),
    fs = defaultFs,
    env = process.env
  } = options

  const {
    HOME: home
  } = env

  const sourcePath = source
  const targetPath = join(home, target)

  var steps = [
    cb => {
      fs.symlink(sourcePath, targetPath, cb)
    }
  ]

  // change target file mode
  if (not(isNil(mode))) {
    steps.push(cb => {
      fs.chmod(target, mode, cb)
    })
  }

  // change target file owner
  if (or(not(isNil(group)), not(isNil(user)))) {
    steps.push(cb => parallel([
      isNil(user)
        ? done => done(null, null)
        : done => getUser(fs, user, done)
      ,
      isNil(group)
        ? done => done(null, null)
        : done => getGroup(fs, group, done)
    ], (err, [user, group]) => {
      if (err) return cb(err)
      const groupId = isNil(group) ? user.groupId : group.id
      const userId = user.userId
      return fs.chown(target, userId, groupId, cb)
    }))
  }

  return callback => waterfall(steps, callback)
}
