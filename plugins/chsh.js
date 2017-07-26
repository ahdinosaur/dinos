// https://docs.saltstack.com/en/develop/ref/states/all/salt.states.git.html

// TODO rev (branch, tag)

const waterfall = require('run-waterfall')
const getUser = require('./lib/getUser')
const Log = require('pino')
const defaultFs = require('fs')
const { join } = require('path')

module.exports = gitRepo

function gitRepo (options) {
  const {
    shell,
    log = Log(),
    fs = defaultFs,
    env = process.env,
    username = env.USER
  } = options

  var steps = [
    cb => {
      log.info(`getUser ${username}`)
      getUser(fs, username, cb)
    },
    (user, cb) => {
      log.info(user)
      if (user.shell === shell) return cb(null)
      exec({
        command: `chsh -s "${shell}" "${user}"`
      })
    }
  ]

  return cb => waterfall(steps, cb)
}
