// https://docs.saltstack.com/en/develop/ref/states/all/salt.states.git.html

// TODO rev (branch, tag)

const waterfall = require('run-waterfall')
const gitPullOrClone = require('git-pull-or-clone')
const Log = require('pino')
const defaultFs = require('fs')
const { join } = require('path')

module.exports = gitRepo

function gitRepo (options) {
  const {
    source,
    target,
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
      log.info(`git pull/clone ${sourcePath} ${targetPath}`)
      gitPullOrClone(sourcePath, targetPath, cb)
    }
  ]

  return cb => waterfall(steps, cb)
}
