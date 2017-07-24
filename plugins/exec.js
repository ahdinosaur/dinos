const assert = require('assert')
const child_process = require('child_process')
const ExitError = require('exit-error')
const Log = require('pino')

module.exports = exec

function exec (options) {
  var { command, commands = [] } = options

  const {
    shell = true,
    stdio = 'inherit',
    spawn = child_process.spawn,
    sudo = false,
    log = Log(),
    env = process.env
  } = options

  if (command) {
    commands.push(command)
  }

  if (sudo) {
    commands = commands.map(command => `sudo ${command}`)
  }

  command = commands.join(' && ')

  return cb => {
    log.info(`spawning ${command}`)

    var child = spawn(command, {
      shell,
      stdio
    })

    child.on('close', (code, signal) => {
      log.info(`close ${command} ${code} ${signal}`)
      cb(ExitError(command, code, signal))
    })
  }
}
