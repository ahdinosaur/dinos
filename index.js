const plugins = require('./plugins')
const series = require('run-series')
const parallel = require('run-parallel')
const Log = require('pino')

module.exports = dinos

function dinos (config, callback) {
  const log = Log()
  const runs = Object.keys(config).map(name => {
    const stepConfigs = config[name]
    const steps = stepConfigs.map(_stepConfig => {
      const stepConfig = Object.assign({ log }, _stepConfig)
      const plugin = plugins[stepConfig.type]
      const step = plugin(stepConfig)
      return next => {
        log.info(_stepConfig)
        step((err) => {
          console.log('done', err)
          next(err)
        })
      }
    })
    return cb => {
      log.info(`configuring ${name}`)
      series(steps, cb)
    }
  })
  parallel(runs, callback)
}
