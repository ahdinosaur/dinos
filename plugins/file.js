// based on https://docs.saltstack.com/en/develop/ref/states/all/salt.states.file.html

const defaultFs = require('fs')
const merge = require('ramda/src/merge')
const is = require('ramda/src/is')
const isNil = require('ramda/src/isNil')
const or = require('ramda/src/or')
const not = require('ramda/src/not')
const waterfall = require('run-waterfall')
const parallel = require('run-parallel')
const pixie = require('pixie')
const Log = require('pino')
//const tryCatch = require('try-catch-callback')

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
  } = options

  var steps = [
    cb => {
      fs.readFile(source, 'utf8', cb)
    },
    (sourceContent, cb) => {
      tryCatch(() => {
        return pixie.parse(sourceContent, '{{', '}}')
      }, cb)
    },
    (sourceTemplate, cb) => {
      tryCatch(() => {
        const templateData = merge(defaults, data)
        return pixie.compile(sourceTemplate, templateData)
      }, cb)
    },
    // write target file content
    (targetContent, cb) => {
      fs.writeFile(target, targetContent, cb)
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
        ? done => done(null, user)
        : done => getUser(fs, user, done)
      ,
      isNil(group)
        ? done => done(null, group)
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

function tryCatch (fn, cb) {
  var result, err = null
  try {
    result = fn()
  } catch (_err) {
    err = _err
  }
  cb(err, result)
}
