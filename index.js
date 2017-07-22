const plugins = require('./plugins')
const series = require('run-series')
const parallel = require('run-parallel')

module.exports = dinos

function dinos (config, cb) {
  const runs = Object.keys(config).map(name => {
    const plugs = config[name]
    const steps = plugs.map(plug => {
      const plugin = plugins[plug.type]
      return plugin(plug)
    })
    console.log('steps', name, steps)
    return cb => series(steps, cb)
  })
  console.log('runs', runs)
  parallel(runs, cb)
}
